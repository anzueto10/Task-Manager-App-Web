import AsideBoard from "../components/boards/AsideBoard";
import Creater from "../components/creater/Creater";
import TaskBoard from "../components/boards/TaskBoard";
import useCreater from "../hooks/useCreater";
import "@fontsource/montserrat";
import "@fontsource/open-sans";
import { TaskProvider } from "../context/task";

const TaskPage = () => {
  const { show } = useCreater();

  return (
    <TaskProvider>
      <div className="min-w-screen min-h-screen flex lg:flex-row flex-col bg-taskBoardContainer lg:p-5 font-openSans">
        <AsideBoard />

        <TaskBoard />
        {show === "task" ? (
          <Creater type="task" />
        ) : (
          show === "board" && <Creater type="board" />
        )}
      </div>
    </TaskProvider>
  );
};

export default TaskPage;
