import { type FormTaskFields, type Project, type Task } from "@/types";
import { useRecoilState } from "recoil";
import { createTask, deleteTask, editTask, getTasks } from "@/api/tasks/crud";
import { loadTasksState, tasksState } from "@/state/atoms";

const useTaskState = () => {
  const { user } = usarConUnaCokkie();
  const { actualProject } = useProjectsState();
  const [tasks, setTasks] = useRecoilState(tasksState);

  const addTask = async (taskData: FormTaskFields) => {
    const newTask = await createTask({
      projectId: actualProject.id,
      taskData,
      userId: user.id,
    });
  };

  const removeTask = (taskId: Task["id"]) => {};

  const editTask = ({
    taskData,
    taskId,
  }: {
    taskData: FormTaskFields;
    taskId: Task["id"];
  }) => {};

  return {
    addTask,
    removeTask,
    editTask,
  };
};

export default useTaskState;
