interface BaseProps {
  as?: any;
  placeholder: string;
  name: string;
  textarea?: boolean;
  password?: boolean;
  email?: boolean;
  file?: boolean;
  defaultValue?: string;
}

interface InputFields extends BaseProps {
  rows?: never;
  cols?: never;
}

interface TextAreaFields extends BaseProps {
  rows: number;
  cols: number;
}

type Props = InputFields | TextAreaFields;

const Input: React.FC<Props> = ({
  as: As,
  name,
  placeholder,
  email,
  password,
  file,
  textarea,
  cols = 1,
  rows = 5,
  defaultValue,
}) => {
  return (
    <>
      {textarea ? (
        <>
          {As ? (
            <As
              as="textarea"
              name={name}
              className="flex resize-none w-full rounded-md border border-input bg-background-light border-input-light ring-offset-background-light placeholder:text-mutedForeground-light focus-visible:ring-ring-light dark:bg-background-dark dark:border-input-dark dark:ring-offset-background-dark dark:placeholder:text-mutedForeground-dark dark:focus-visible:ring-ring-dark px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 col-span-3 p-2.5"
              placeholder={placeholder}
              rows={rows}
              cols={cols}
              value={defaultValue}
            ></As>
          ) : (
            <textarea
              name={name}
              className="flex resize-none w-full rounded-md border border-input bg-background-light border-input-light ring-offset-background-light placeholder:text-mutedForeground-light focus-visible:ring-ring-light dark:bg-background-dark dark:border-input-dark dark:ring-offset-background-dark dark:placeholder:text-mutedForeground-dark dark:focus-visible:ring-ring-dark px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 col-span-3 p-2.5"
              placeholder={placeholder}
              rows={rows}
              cols={cols}
              value={defaultValue}
            ></textarea>
          )}
        </>
      ) : (
        <>
          {As ? (
            <As
              type={
                file ? "file" : password ? "password" : email ? "email" : "text"
              }
              name={name}
              className="flex h-10 w-full rounded-md border border-input bg-background-light ring-offset-background-light placeholder:text-mutedForeground-light focus-visible:ring-ring-light border-input-light dark:bg-background-dark dark:ring-offset-background-dark dark:placeholder:text-mutedForeground-dark dark:focus-visible:ring-ring-dark dark:border-input-dark px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 col-span-3 p-2.5"
              placeholder={placeholder}
              value={defaultValue}
            />
          ) : (
            <input
              type={
                file ? "file" : password ? "password" : email ? "email" : "text"
              }
              name={name}
              className="flex h-10 w-full rounded-md border border-input bg-background-light ring-offset-background-light placeholder:text-mutedForeground-light focus-visible:ring-ring-light border-input-light dark:bg-background-dark dark:ring-offset-background-dark dark:placeholder:text-mutedForeground-dark dark:focus-visible:ring-ring-dark dark:border-input-dark px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 col-span-3 p-2.5"
              placeholder={placeholder}
              value={defaultValue}
            />
          )}
        </>
      )}
    </>
  );
};

export default Input;
