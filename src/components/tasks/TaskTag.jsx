// eslint-disable-next-line react/prop-types
const TaskTag = ({ children }) => {
  return (
    <li className="rounded-lg bg-tagSky text-blue-600 py-1 px-2 text-sm font-bold ">
      {children}
    </li>
  );
};

export default TaskTag;
