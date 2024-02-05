import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data: { name: string, mail: string, description: string, date: string } = await request.json();
  const { MAILJET_API, MAILJET_PUBLIC_KEY, MAILJET_SECRET_KEY, INQUIRY_MAIL_FROM, INQUIRY_MAIL_TO } = import.meta.env;

  if (!MAILJET_SECRET_KEY || !MAILJET_PUBLIC_KEY || !INQUIRY_MAIL_FROM || !INQUIRY_MAIL_TO || !MAILJET_API) {
    console.error("Missing Mailjet credentials or E-Mail settings in environment variables")
  }

  const { name, mail, description, date } = data;

  const formattedDate = new Date(date).toLocaleDateString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (!name || !mail || !description || !date) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }


  const body = {
    "Messages": [
      {
        "From": {
          "Email": INQUIRY_MAIL_FROM,
          "Name": "Cliqshot Inquiry"
        },
        "ReplyTo": {
          "Email": mail,
          "Name": name
        },
        "To": [
          {
            "Email": INQUIRY_MAIL_TO,
            "Name": "Cliqshot"
          }
        ],
        "Subject": "Cliqshot Buchungsanfrage erhalten",
        "TextPart": `Es gibt eine neue Buchungsanfrage für Cliqshot:\r\nDatum: ${formattedDate}\r\nName: ${name}\r\nE-Mail: ${mail}\r\nBeschreibung: ${description}`,
        "HTMLPart": `<h3>Neue Buchungsanfrage erhalten</h3><br />Es gibt eine neue Buchungsanfrage für Cliqshot:<br /><br /><strong>Datum: </strong>${formattedDate}<br /><strong>Name: </strong>${name}<br /><strong>E-Mail: </strong>${mail}<br /><strong>Beschreibung: </strong>${description}`
      }
    ]
  };

  const req = await fetch(MAILJET_API, {
    method: "POST", body: JSON.stringify(body), headers: {
      "Content-Type": "application/json", "Authorization": 'Basic ' + Buffer.from(MAILJET_PUBLIC_KEY + ":" + MAILJET_SECRET_KEY).toString('base64')
    }
  })
  console.log("Mailjet Response", await req.json());
  if (req.status == 200) {

    return new Response(
      JSON.stringify({
        message: "Success!"
      }),
      { status: 200 }
    );
  }

  return new Response(
    JSON.stringify({
      message: "Something went wrong",
    }),
    { status: 500 }
  );
};