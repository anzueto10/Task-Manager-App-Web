import { Select as HeadlessUISelect } from "@headlessui/react";

interface Option {
  value: string;
  text: string;
}

interface Props {
  name: string;
  options: Array<Option>;
  as?: any;
}

const SelectInput: React.FC<Props> = ({ name, options, as: As }) => {
  return (
    <>
      {As ? (
        <As
          as="select"
          name={name}
          className="flex h-10 w-full rounded-md border border-input bg-background-light ring-offset-background-light placeholder:text-mutedForeground-light focus-visible:ring-ring-light border-input-light dark:bg-background-dark dark:ring-offset-background-dark dark:placeholder:text-mutedForeground-dark dark:focus-visible:ring-ring-dark dark:border-input-dark px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 col-span-3 p-2.5"
        >
          {options.map((op) => (
            <option
              value={op.value}
              key={op.value}
              className="text-primary-light hover:bg-muted-light dark:text-primary-dark dark:hover:bg-muted-dark"
            >
              {op.text}
            </option>
          ))}
        </As>
      ) : (
        <HeadlessUISelect
          name={name}
          className="flex h-10 w-full rounded-md border border-input bg-background-light ring-offset-background-light placeholder:text-mutedForeground-light focus-visible:ring-ring-light border-input-light dark:bg-background-dark dark:ring-offset-background-dark dark:placeholder:text-mutedForeground-dark dark:focus-visible:ring-ring-dark dark:border-input-dark px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 col-span-3 p-2.5"
        >
          {options.map((op) => (
            <option
              value={op.value}
              key={op.value}
              className="text-primary-light hover:bg-muted-light dark:text-primary-dark dark:hover:bg-muted-dark"
            >
              {op.text}
            </option>
          ))}
        </HeadlessUISelect>
      )}
    </>
  );
};

export default SelectInput;
