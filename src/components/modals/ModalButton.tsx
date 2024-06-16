import useModalButton from "@/hooks/useModalButton";
import { type IconType, type IconSize, type ModalType } from "@/types";

interface Props<T> {
  handleOpen: () => void;
  onSave: (data: T) => void;
  Icon?: IconType;
  text?: string;
  iconSize?: IconSize;
  isFab?: boolean;
}

const ModalButton = <T,>({
  onSave,
  Icon,
  text,
  iconSize,
  isFab,
  handleOpen,
}: Props<T>) => {
  const classes = `bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white ${
    isFab
      ? `fixed p-5 rounded-full right-10 bottom-5`
      : "block w-full px-5 py-2.5 font-medium rounded-lg text-sm rounded-lg"
  }`;

  return (
    <>
      <button
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        className={classes}
        type="button"
        onClick={handleOpen}
      >
        {Icon && <Icon fontSize={iconSize} />}
        {text && text}
      </button>
    </>
  );
};

export default ModalButton;
