import { Datepicker as FlowbiteDatepicker } from "flowbite-react";
import LabelText from "./LabelText";

interface Props {
  className?: string;
  onSelectedDateChanged: (date: Date) => void;
}

const theme = {
  root: {
    base: "relative",
  },
  popup: {
    root: {
      base: "absolute top-10 z-50 block",
      inline: "relative top-0 z-auto",
      inner: "inline-block bg-white p-4 w-full min-w-fit",
    },
    header: {
      base: "",
      title: "px-2 py-3 text-center font-semibold text-gray-900",
      selectors: {
        base: "flex justify-between mb-2",
        button: {
          base: "text-sm text-gray-900 font-semibold py-2.5 px-5 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch",
          prev: "",
          next: "",
          view: "",
        },
      },
    },
    view: {
      base: "p-1",
    },
    footer: {
      base: "hidden flex mt-2 space-x-2",
    },
  },
  views: {
    days: {
      header: {
        base: "grid grid-cols-7 mb-1",
        title:
          "dow h-6 text-center text-sm font-medium leading-6 text-gray-500",
      },
      items: {
        base: "grid lg:w-64 w-full grid-cols-7",
        item: {
          base: "block flex-1 cursor-pointer border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 ",
          selected: "bg-orange text-white hover:text-black",
          disabled: "text-gray-500",
        },
      },
    },
    months: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500",
        },
      },
    },
    years: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500",
        },
      },
    },
    decades: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500",
        },
      },
    },
  },
};

const Datepicker: React.FC<Props> = ({ className, onSelectedDateChanged }) => {
  return (
    <label>
      <LabelText>Termin</LabelText>
      <FlowbiteDatepicker
        showClearButton={false}
        showTodayButton={false}
        theme={theme}
        language="de-DE"
        weekStart={1}
        minDate={new Date()}
        inline
        onSelectedDateChanged={onSelectedDateChanged}
        className={`mt-1 ${className || ""}`}
      />
    </label>
  );
};

export default Datepicker;
