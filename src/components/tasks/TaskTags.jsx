/* eslint-disable react/prop-types */

import TaskTag from "./TaskTag";

const TaskTags = ({ tags }) => {
  return (
    <ul className="gap-3 flex flex-wrap w-full">
      {tags.map((tag, index) => (
        <TaskTag key={index}>{tag}</TaskTag>
      ))}
    </ul>
  );
};

export default TaskTags;
