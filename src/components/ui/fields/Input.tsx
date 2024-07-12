import React, { ChangeEvent } from "react";

interface Props {
  placeholder: string;
  name: string;
  password?: boolean;
  email?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
  name,
  placeholder,
  email,
  password,
  onChange,
  value,
}) => {
  return (
    <input
      type={password ? "password" : email ? "email" : "text"}
      name={name}
      className="flex h-10 w-full rounded-md border border-input bg-background-light ring-offset-background-light placeholder:text-mutedForeground-light focus-visible:ring-ring-light border-input-light dark:bg-background-dark dark:ring-offset-background-dark dark:placeholder:text-mutedForeground-dark dark:focus-visible:ring-ring-dark dark:border-input-dark px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 col-span-3 p-2.5"
      placeholder={placeholder}
      value={value || ""}
      onChange={onChange}
    />
  );
};

export default Input;
