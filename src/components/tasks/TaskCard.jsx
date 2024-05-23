import TaskOptionsCard from "./TaskOptionsCard";
import TaskTags from "./TaskTags";
import { useState } from "react";

/* eslint-disable react/prop-types */
const TaskCard = ({ task }) => {
  const { name, image, tags } = task;
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(true);

  const handleCancel = () => setShow(false);

  return (
    <>
      <li
        className="bg-taskCard text-white p-4 rounded-lg cursor-pointer transition-all ease-out"
        onClick={handleClick}
      >
        <header className="mb-4 ">{image && <img src={image} />}</header>
        <p
          className="mb-4 text-xl cursor-text"
          onClick={(e) => e.stopPropagation()}
        >
          {name}
        </p>
        <footer className="flex flex-row justify-start gap-4">
          <TaskTags tags={tags} />
        </footer>
      </li>

      {show && <TaskOptionsCard task={task} handleCancel={handleCancel} />}
    </>
  );
};

export default TaskCard;
