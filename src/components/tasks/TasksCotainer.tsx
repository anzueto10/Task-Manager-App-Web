import { Status, Task } from "@/types";
import TasksStatusContainer from "@/components/tasks/status/TasksStatusContainer";
import { STATUS_TEXTS } from "@/consts";
import { Tabs, TabList, TabPanels, Tab } from "@chakra-ui/react";

interface Props {
  tasks: Array<Task>;
}

const TasksCotainerCard: React.FC<Props> = ({ tasks }) => {
  return (
    <Tabs
      variant="unstyled"
      className="text-mutedForeground-light dark:text-mutedForeground-dark"
    >
      <TabList className="bg-muted-light dark:bg-muted-dark w-fit rounded-lg p-1">
        {Object.entries(STATUS_TEXTS).map(([key, value]) => (
          <Tab
            key={key}
            className="aria-[selected=true]:bg-background-light dark:aria-[selected=true]:bg-background-dark rounded-lg py-1 px-3"
          >
            {value.text}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {Object.entries(STATUS_TEXTS).map(([key, value]) => (
          <TasksStatusContainer
            key={key}
            tasks={tasks.filter((t) => t.status === value.value)}
            status={value.text}
          />
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default TasksCotainerCard;
