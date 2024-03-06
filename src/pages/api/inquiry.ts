import type { APIRoute } from "astro";
import escape from 'validator/lib/escape';

interface FormData {
  date: string, name: string, mail: string, description: string
}

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {

  const data: FormData = await request.json()

  const { MAILJET_API, MAILJET_PUBLIC_KEY, MAILJET_SECRET_KEY, INQUIRY_MAIL_FROM, INQUIRY_MAIL_TO } = import.meta.env;

  if (!MAILJET_SECRET_KEY || !MAILJET_PUBLIC_KEY || !INQUIRY_MAIL_FROM || !INQUIRY_MAIL_TO || !MAILJET_API) {
    console.error("Missing Mailjet credentials or E-Mail settings in environment variables")
  }

  const name = escape(data.name);
  const mail = escape(data.mail);
  const date = escape(data.date);
  const description = escape(data.description);

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

  const mailjetRequest = await fetch(MAILJET_API, {
    method: "POST", body: JSON.stringify(body), headers: {
      "Content-Type": "application/json", "Authorization": 'Basic ' + Buffer.from(MAILJET_PUBLIC_KEY + ":" + MAILJET_SECRET_KEY).toString('base64')
    }
  })
  const mailjetRequestJson = await mailjetRequest.json();
  console.log("Mailjet Response", mailjetRequestJson);

  if (mailjetRequest.status == 200 && mailjetRequestJson?.["Messages"]?.[0].Status === "success") {

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

export { };  