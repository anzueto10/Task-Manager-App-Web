"use client";
import { Task } from "@/types";
import TasksStatusContainer from "@/components/tasks/status/TasksStatusContainer";
import { STATUS_TEXTS } from "@/consts";
import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { tasksState } from "@/store/atoms";
import { getActualProject } from "@/store/selectors";

import FormModal from "@/components/ui/modal/FormModal";
import CreateTask from "@/components/tasks/forms/CreateTask";
import AddIcon from "@/components/ui/icons/AddIcon";

interface Props {
  initialTasks: Array<Task>;
}

const TasksContainerCard: React.FC<Props> = ({ initialTasks }) => {
  const [tasks, setTasks] = useRecoilState(tasksState);
  const actualProject = useRecoilValue(getActualProject);

  useEffect(() => {
    if (tasks.length === 0) setTasks(initialTasks);
  }, [initialTasks, setTasks]);

  /*
    {matches ? (
      <Select className="w-full bg-background-light dark:bg-background-dark active:bg-transparent hover:bg-transparent border">
        {Object.entries(STATUS_TEXTS).map(([key, value]) => (
          <Tab
            as="option"
            key={key}
            className="active:bg-transparent data-[selected]:bg-background-light data-[selected]:outline-none data-[selected]:shadow-lg data-[selected]:text-foreground-light dark:data-[selected]:bg-background-dark dark:data-[selected]:text-foreground-dark dark:data-[selected]:shadow-lg dark:data-[selected]:outline-none rounded-lg text-sm py-1 px-3 font-semibold"
          >
            {value.text}
          </Tab>
        ))}
      </Select>
    ) : ( */
  return (
    <>
      {!initialTasks ? (
        <h3>Error al encontrar las tareas por favor intentalo de nuevo</h3>
      ) : !actualProject ? (
        <h1>Selecciona un proyecto para empezar</h1>
      ) : (
        <>
          <TabGroup className="text-mutedForeground-light dark:text-mutedForeground-dark">
            <TabList className="inline-flex bg-muted-light dark:bg-muted-dark w-full 2xs:w-fit rounded-lg items-center justify-center p-1 border-b h-9 mb-6">
              {Object.entries(STATUS_TEXTS).map(([key, value]) => (
                <Tab
                  key={key}
                  className="data-[selected]:bg-background-light data-[selected]:outline-none data-[selected]:shadow-lg data-[selected]:text-foreground-light dark:data-[selected]:bg-background-dark dark:data-[selected]:text-foreground-dark dark:data-[selected]:shadow-lg dark:data-[selected]:outline-none rounded-lg text-sm py-1 px-3 font-semibold"
                >
                  {value.text}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {Object.entries(STATUS_TEXTS).map(([key, value]) => (
                <TasksStatusContainer
                  key={key}
                  status={value.value}
                  tasks={tasks
                    .filter((t) => t.projectId === actualProject.id)
                    .filter((t) => t.status === value.value)}
                />
              ))}
            </TabPanels>
          </TabGroup>

          <div className="fixed bottom-5 right-5">
            <FormModal
              Form={CreateTask}
              openButtonVariable="outline"
              modalFormName="ModalCreateTaskForm"
              buttonActionText="Create"
              buttonCancelText="Cancel"
              modalDescription="Fill out the field to create a Task"
              modalTitle="Create Task"
              ModalIcon={AddIcon}
              openButtonRounded="full"
              typeOfForm="task"
            />
          </div>
        </>
      )}
    </>
  );
};

export default TasksContainerCard;
