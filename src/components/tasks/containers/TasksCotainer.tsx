import { Task } from "@/types";
import TasksStatusContainer from "@/components/tasks/status/TasksStatusContainer";
import { STATUS_TEXTS } from "@/consts";
import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import { useMediaQuery } from "@react-hook/media-query";
import { Select } from "@headlessui/react";

interface Props {
  tasks: Array<Task> | undefined;
}

const TasksContainerCard: React.FC<Props> = ({ tasks }) => {
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

      {!tasks ? (
        <h3>Error al encontrar las tareas por favor intentalo de nuevo</h3>
      ) : (
        <TabPanels>
          {Object.entries(STATUS_TEXTS).map(([key, value]) => (
            <TasksStatusContainer
              key={key}
              tasks={tasks.filter((t) => t.status === value.value)}
            />
          ))}
        </TabPanels>
      )}
    </TabGroup>
  );
};

export default TasksContainerCard;
