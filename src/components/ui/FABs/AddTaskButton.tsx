import saveTask from "@/utils/tasks/saveTask";
import AddIcon from "@mui/icons-material/Add";
import ModalButton from "@/components/modals/ModalButton";

const AddTaskButton: React.FC = () => {
  return (
    <ModalButton
      handleOpen={() => {}}
      onSave={saveTask}
      Icon={AddIcon}
      iconSize="large"
      isFab={true}
    />
  );
};

export default AddTaskButton;
