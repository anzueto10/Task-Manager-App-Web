import getTaskFormData from "@/services/tasks/getTaskFormData";
import { type FormTaskFields, type ModalType } from "@/types";
import ModalPortal from "@/components/modals/ModalPortal";
import { MODALS_TITLES, STATUS_TEXTS, TASK_FIELDS_TEXTS } from "@/consts";
import useModalsStore from "@/store/modals";
import { type MouseEvent } from "react";

const TaskModal: React.FC = () => {
  const onSave = (data: any) => {};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = getTaskFormData({ form });
    onSave(data);
    onClose();
  };

  const isOpen = useModalsStore((state) => state.taskModal);

  const onClose = useModalsStore((state) => state.closeTaskModal);

  return (
    <div
      id="crud-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full bg-slate-800 bg-opacity-50 ${
        isOpen ? "h-full flex" : "h-[calc(100%-1rem)] hidden"
      } `}
      onClick={onClose}
    >
      <div
        className="relative p-4 w-full max-w-md max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/*<!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/*<!-- Modal header -->*/}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {MODALS_TITLES.TASK}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-base w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden={true}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/*<!-- Modal body -->*/}
          <form className="p-4 md:p-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                >
                  {TASK_FIELDS_TEXTS.TITLE}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder={TASK_FIELDS_TEXTS.TITLE_HOLDER}
                  required={true}
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="category"
                  className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                >
                  {TASK_FIELDS_TEXTS.STATUS}
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  {Object.entries(STATUS_TEXTS).map(([key, status]) => (
                    <option key={key} value={status.value}>
                      {status.text}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                >
                  {TASK_FIELDS_TEXTS.DESCRIPTION}
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className="block p-2.5 w-full text-base resize-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={TASK_FIELDS_TEXTS.DESCRIPTION_HOLDER}
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="text-white w-full inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {TASK_FIELDS_TEXTS.BUTTON}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
