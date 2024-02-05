import { useEffect, useState, type FormEvent } from "react";
import Datepicker from "./Datepicker.tsx";
import LabelText from "./LabelText.tsx";

interface Props {
  className?: string;
}

interface FormData {
  name: string;
  mail: string;
  description: string;
  date: Date | string;
}

const BookingForm: React.FC<Props> = ({ className }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mail: "",
    description: "",
    date: new Date(),
  });

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("/api/inquiry", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.message) {
      console.log("Response", data);
    }
  }

  return (
    <form
      className={`flex gap-4 flex-col lg:flex-row ${className || ""}`}
      onSubmit={submit}
    >
      <Datepicker
        onSelectedDateChanged={(e) => {
          setFormData((oldState) => ({
            ...oldState,
            date: e,
          }));
        }}
      />
      <div className="flex-1 flex flex-col gap-2">
        <label className="block">
          <LabelText>Name</LabelText>
          <input
            type="text"
            className="mt-1 block w-full border-0 focus:ring-orange"
            placeholder="Max Mustermann"
            value={formData.name}
            name="name"
            id="name"
            onChange={(e) => {
              e?.target?.value != undefined &&
                setFormData((oldState) => ({
                  ...oldState,
                  name: e?.target?.value,
                }));
            }}
            required
          />
        </label>
        <label className="block">
          <LabelText>E-Mail</LabelText>
          <input
            type="email"
            className="mt-1 block w-full border-0 focus:ring-orange"
            placeholder="max@mustermann.de"
            name="mail"
            id="mail"
            value={formData.mail}
            onChange={(e) => {
              e?.target?.value != undefined &&
                setFormData((oldState) => ({
                  ...oldState,
                  mail: e?.target?.value,
                }));
            }}
            required
          />
        </label>
        <label className="block flex-1">
          <LabelText>Beschreibung</LabelText>
          <textarea
            rows={3}
            className="mt-1 block w-full h-auto border-0 focus:ring-orange overflow-hidden"
            placeholder="Um was für eine Veranstaltung handelt es sich?"
            name="description"
            id="description"
            value={formData.description}
            onChange={(e) => {
              e?.target?.value != undefined &&
                setFormData((oldState) => ({
                  ...oldState,
                  description: e?.target?.value,
                }));
            }}
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="flex font-inter font-semibold w-full items-center justify-center gap-2 py-6 px-5 text-base text-white bg-orange hover:bg-orange/45"
        >
          Anfragen!
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
