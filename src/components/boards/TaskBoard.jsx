import useBoard from "../../hooks/useBoard";
import useTask from "../../hooks/useTask";
import AddBoardButton from "../board/AddBoardButton";
import { useMediaQuery } from "react-responsive";
import TasksSection from "../tasks/TasksSection";
import AddTaskFooter from "../tasks/AddTaskFooter";

const TaskBoard = () => {
  const { state } = useTask();

  const { boards, selectedBoard } = useBoard();

  const tasks = state.filter((task) => task.board === selectedBoard.name);

  const backLogTasks = tasks.filter((task) => task.status === "backlog");
  const inProgressTasks = tasks.filter((task) => task.status === "inProgress");
  const inReviewTasks = tasks.filter((task) => task.status === "inReview");
  const completedTasks = tasks.filter((task) => task.status === "completed");

  //TODO Hacer el smlg un contexto
  const smlg = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <main className="w-full lg:w-4/5 lg:min-h-full bg-taskBoard rounded-lg flex lg:flex-row flex-col flex-grow">
      {boards.length > 0 || undefined ? (
        <>
          <TasksSection tasks={backLogTasks} color="blue-600" text="BackLog" />

          <TasksSection
            tasks={inProgressTasks}
            color="yellow-400"
            text="In Progress"
          />

          <TasksSection
            tasks={inReviewTasks}
            color="purple-600"
            text="In Review"
          />

          <TasksSection
            tasks={completedTasks}
            color="green-600"
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
