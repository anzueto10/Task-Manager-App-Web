import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// eslint-disable-next-line react/prop-types
const TasksDropdown = ({ classes, drop, ocultTasks, showTasks }) => {
  const handleClick = () => {
    if (drop) ocultTasks();
    else showTasks();
  };

  return (
    <button
      onClick={handleClick}
      className={`text-white transition-all ease-out transform ${
        drop ? "rotate-90" : ""
      } ${classes}`}
    >
      <ArrowForwardIosIcon fontSize="medium" />
    </button>
  );
};

export default TasksDropdown;
