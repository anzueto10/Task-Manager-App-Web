/* eslint-disable react/prop-types */
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useCreater from "../../hooks/useCreater";

const AddBoardButton = () => {
  const { show, setShow } = useCreater();

  const handleClick = () => setShow("board");

  const isDisabled = show === "task" ? true : false;

  return (
    <button
      className={`rounded-full flex flex-row items-center gap-3 p-2 ${
        isDisabled && "cursor-not-allowed opacity-50 hover:cursor-not-allowed"
      }`}
      disabled={isDisabled}
      onClick={handleClick}
    >
      <AddCircleIcon className="text-white h-full" fontSize="large" />
      <span className="text-white text-lg">Add New Board</span>
    </button>
  );
};

export default AddBoardButton;
