/* eslint-disable react/prop-types */
import TaskCard from "./TaskCard";

const Tasks = ({ tasks }) => {
  return (
    <ul className="w-full flex flex-col gap-7 transition-all ease-out">
      {tasks.map((task, index) => (
        <TaskCard task={task} key={index} />
      ))}
    </ul>
  );
};

export default Tasks;
