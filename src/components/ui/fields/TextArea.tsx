import { TEXT_AREA_CLASSES } from "@/consts";
import { ChangeEvent } from "react";

interface Props {
  placeholder: string;
  name: string;
  rows: number;
  cols: number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}

const TextArea: React.FC<Props> = ({
  cols,
  name,
  placeholder,
  rows,
  onChange,
  value,
}) => {
  return (
    <textarea
      name={name}
      className={TEXT_AREA_CLASSES}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      value={value || ""}
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea;
