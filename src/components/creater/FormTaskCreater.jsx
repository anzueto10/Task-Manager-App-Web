import useCreater from "../../hooks/useCreater";
import FormCreaterButtons from "./FormCreaterButtons";
import ImageTaskInput from "../tasks/ImageTaskInput";
import useTask from "../../hooks/useTask";
import TagInput from "./TagInput";
import useBoard from "../../hooks/useBoard";

const FormTaskCreater = () => {
  const { setShow } = useCreater();
  const { addTask, generateId } = useTask();
  const { selectedBoard } = useBoard();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    //Obtenemos la url de la imagen de la tarea
    const imageInput = form.querySelector('input[name="image"]');
    const imageUrl = imageInput.getAttribute("data-img-url");

    const data = new FormData(e.target);
    const name = data.get("taskName");
    const status = data.get("status");
    const tags = JSON.parse(data.get("tags"));

    //Creamos un objeto con los datos del creater

    const task = {
      id: generateId(),
      image: imageUrl,
      name: name,
      status: status,
      tags: tags,
      board: selectedBoard.name,
    };

    addTask({ task });
    setShow("");
  };

  return (
    <form
      className="w-full flex flex-col gap-6"
      onSubmit={handleSubmit}
      id="creater"
    >
      <ImageTaskInput />
      <label className="w-full flex flex-col gap-5 ">
        <span className="text-createrLabel font-bold text-sm">Task Name</span>
        <input
          type="text"
          name="taskName"
          id="taskNameField"
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

      <label className="w-full flex flex-col gap-5 text-white ">
        <span className="text-createrLabel font-bold text-sm">Tags</span>
        <TagInput />
      </label>
      <FormCreaterButtons type="task" />
    </form>
  );
};

export default FormTaskCreater;
