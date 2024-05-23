/* eslint-disable react/prop-types */
import AddIcon from "@mui/icons-material/Add";
import useCreater from "../../hooks/useCreater";

const AddTaskButton = () => {
  const { show, setShow } = useCreater();

  const handleClick = () => setShow("task");

  const isDisabled = show === "board" ? true : false;

  return (
    <button
      className={`bg-taskAddButton rounded-2xl flex p-3 w-full hover:bg-taskAddButtonHover active:bg-taskAddButtonClick  ${
        isDisabled && "cursor-not-allowed opacity-50 hover:cursor-not-allowed"
      }`}
      disabled={isDisabled}
      onClick={handleClick}
    >
      <span className="text-lg text-taskAddButton font-bold w-full flex flex-row justify-between items-center">
        Add new task <AddIcon fontSize="large" />
      </span>
    </button>
  );
};

export default AddTaskButton;
