import TaskModal from "@/components/modals/TaskModal";
import saveTask from "@/services/tasks/saveTask";
import AddIcon from "@mui/icons-material/Add";
import ModalButton from "@/components/modals/ModalButton";

const AddTaskButton: React.FC = () => {
  return (
    <ModalButton
      Modal={TaskModal}
      onSave={saveTask}
      Icon={AddIcon}
      iconSize="large"
      isFab={true}
    />
  );
};

export default AddTaskButton;
