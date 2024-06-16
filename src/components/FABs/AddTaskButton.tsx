import TaskModal from "@/components/modals/TaskModal";
import saveTask from "@/services/tasks/saveTask";
import AddIcon from "@mui/icons-material/Add";
import ModalButton from "@/components/modals/ModalButton";
import useModalsStore from "@/store/modals";

const AddTaskButton: React.FC = () => {
  return (
    <ModalButton
      handleOpen={useModalsStore((state) => state.openTaskModal)}
      onSave={saveTask}
      Icon={AddIcon}
      iconSize="large"
      isFab={true}
    />
  );
};

export default AddTaskButton;
