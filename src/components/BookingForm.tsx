interface Props {
  className?: string;
}

const BookingForm: React.FC<Props> = ({className}) => {
  return (
    <form className="flex-1 flex flex-col gap-2">
    <label className="block">
      <span className="text-gray-700">Name</span>
      <input
        type="text"
        className="form-input mt-1 block w-full"
        placeholder="Max Mustermann"
      />
    </label>
    <label className="block">
      <span className="text-gray-700">E-Mail</span>
      <input
        type="email"
        className="form-input mt-1 block w-full"
        placeholder="max@mustermann.de"
      />
    </label>
    <label className="block">
      <span className="text-gray-700">Nachricht</span>
      <textarea
        className="form-textarea mt-1 block w-full h-full"
        placeholder="Enter some long form content."
      ></textarea>
    </label>
  </form>
  );
};

export default BookingForm;
