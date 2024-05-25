import useBoard from "../../hooks/useBoard";
import useTask from "../../hooks/useTask";
import AddBoardButton from "../board/AddBoardButton";
import { useMediaQuery } from "react-responsive";
import TasksSection from "../tasks/TasksSection";
import AddTaskFooter from "../tasks/AddTaskFooter";

const TaskBoard = () => {
  const { state } = useTask();

  const { boards, selectedBoard } = useBoard();

  const tasks = selectedBoard
    ? state.filter((task) => task.board === selectedBoard.name)
    : [];

  const backLogTasks = tasks.filter((task) => task.status === "backlog");
  const inProgressTasks = tasks.filter((task) => task.status === "inProgress");
  const inReviewTasks = tasks.filter((task) => task.status === "inReview");
  const completedTasks = tasks.filter((task) => task.status === "completed");

  //TODO Hacer el smlg un contexto
  const smlg = useMediaQuery({ query: "(max-width: 1279px)" });

  return (
    <main className="w-full xl:w-4/5 xl:min-h-full flex-grow bg-taskBoard rounded-lg flex xl:flex-row flex-col items-center justify-center">
      {boards.length > 0 || undefined ? (
        <>
          <TasksSection
            tasks={backLogTasks}
            classes="text-blue-600"
            text="BackLog"
          />

          <TasksSection
            tasks={inProgressTasks}
            classes="text-yellow-400"
            text="In Progress"
          />

          <TasksSection
            tasks={inReviewTasks}
            classes="text-purple-600"
            text="In Review"
          />

          <TasksSection
            tasks={completedTasks}
            classes="text-green-600"
            text="Completed"
          />

          {smlg && <AddTaskFooter />}
        </>
      ) : (
        <div className="w-full text-3xl text-white flex flex-col items-center justify-center gap-5">
          Create a Board to start
          <AddBoardButton />
        </div>
      )}
    </main>
  );
};

export default TaskBoard;
