import { FormTaskFields } from "@/types";
import TaskModal from "./modals/TaskModal";
import useAddTaskButton from "@/hooks/useAddTaskButton";

const AddTaskButton = () => {
  const { modalIsOpen, openModal, closeModal } = useAddTaskButton();
  const handleSaveTask = (data: FormTaskFields) => {
    console.log(data);
  };

  const handleOpen = () => openModal();

  return (
    <div>
      <button
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        className="block w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={handleOpen}
      >
        Toggle modal
      </button>
      <TaskModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        onSave={handleSaveTask}
      />
    </div>
  );
};

export default AddTaskButton;
