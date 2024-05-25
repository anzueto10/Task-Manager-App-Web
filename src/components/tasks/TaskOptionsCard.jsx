/* eslint-disable react/prop-types */
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import useTask from "../../hooks/useTask";
import ImageTaskInput from "./ImageTaskInput";
import TagInput from "../creater/TagInput";
import { useState } from "react";

const TaskOptionsCard = ({ task, handleCancel }) => {
  const { name, image, tags, id } = task;
  const { removeTask, editTask } = useTask();

  const [nameValue, setNameValue] = useState(name);

  const handleNameValue = (e) => setNameValue(e.target.value);

  const handleDelete = () => {
    removeTask({ id });
    handleCancel();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    //Obtenemos la url de la imagen de la tarea
    const imageInput = form.querySelector('input[name="image"]');
    const imageUrl = imageInput.getAttribute("data-img-url");

    const data = new FormData(e.target);
    const newName = data.get("taskName");
    const newStatus = data.get("status");
    const newTags = JSON.parse(data.get("tags"));

    const editData = {
      newName: newName,
      newImage: imageUrl,
      newStatus: newStatus,
      newTags: newTags,
    };

    editTask({ id, editData });

    handleCancel();
  };
  return (
    <div className="flex bg-gradient-to-b from-containerCreatersBlue to-containerCreatersRed xl:right-10 xl:bottom-10 fixed p-3 rounded-xl xl:w-3/12 w-full z-30 top-16 left-0">
      <div className="rounded-lg bg-taskCreater px-7 py-4 w-full h-full">
        <header className="flex flex-row justify-between w-full mb-5">
          <h1 className="text-white text-lg">Edit Task Name</h1>
          <button onClick={handleCancel} className="text-white">
            <CloseIcon fontSize="large" />
          </button>
        </header>

        <form
          className="w-full flex flex-col gap-6"
          onSubmit={handleSubmit}
          id="creater"
        >
          <ImageTaskInput defaultImage={image} />
          <label className="w-full flex flex-col gap-5 ">
            <span className="text-createrLabel font-bold text-sm">
              Task Name
            </span>
            <input
              type="text"
              name="taskName"
              id="taskNameField"
              value={nameValue}
              onChange={handleNameValue}
              placeholder="Create a web..."
              className="w-full border-createrInput border-solid border-2 rounded-md text-white p-3 bg-transparent text-base"
            />
          </label>
          {/*<label className="w-full flex flex-col gap-5">
      <span className="text-createrLabel font-bold">Task Description</span>
      <textarea
        name=""
        id=""
        maxLength="50"
        className="w-full border-createrInput border-solid border-2 rounded-md text-white p-3 bg-transparent"
      ></textarea>
    </label> */}
          <label className="w-full flex flex-col gap-5">
            <span className="text-createrLabel font-bold text-sm">Status</span>
            <select
              name="status"
              id="statusFieldSelect"
              className="w-full text-white p-3 border-createrInput border-solid border-2 rounded-md bg-selectStatus"
            >
              <option className="bg-blue" value="backlog">
                Backlog
              </option>

              <option className="bg-transparent" value="inProgress">
                In Progress
              </option>

              <option className="bg-transparent" value="inReview">
                In review
              </option>

              <option className="bg-transparent" value="completed">
                Completed
              </option>
            </select>
          </label>

          <label className="w-full flex flex-col gap-5 text-white">
            <span className="text-createrLabel font-bold text-sm">Tags</span>
            <TagInput tagsDefault={tags} />
          </label>
          <div className="flex xl:flex-row flex-col gap-5 justify-start w-full">
            <button
              type="submit"
              className="bg-blue-700 w-full text-white px-4 py-1.5 text-sm rounded-2xl flex flex-row items-center gap-5 justify-center xl:w-3/12"
            >
              Save
              <CheckIcon fontSize="small" className="inline-block" />
            </button>
            <button
              className="border-2 bg-red-700 border-solid hover:bg-red-600 active:bg-red-500 border-red-800 text-white px-5 py-1.5 text-sm rounded-2xl"
              onClick={handleDelete}
              type="button"
            >
              Delete task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskOptionsCard;
