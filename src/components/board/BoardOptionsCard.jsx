/* eslint-disable react/prop-types */
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import LogosBoardInput from "./LogosBoardInput";
import logos from "../logos/Logos";
import { useState } from "react";
import useBoard from "../../hooks/useBoard";

const BoardOptionsCard = ({ board, handleCancel }) => {
  //TERMINAR EL CARD DE LAS OPCIONES DE LOS BOARD
  const { name, logo } = board;
  const { removeBoard, editBoard } = useBoard();
  const [nameValue, setNameValue] = useState(name);

  const handleNameValue = (e) => setNameValue(e.target.value);

  const handleDelete = () => {
    removeBoard({ name });
    handleCancel();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const newName = data.get("boardName");
    const newLogo = data.get("logo");

    const editData = {
      newName: newName,
      newLogo: newLogo,
    };

    editBoard({ name, editData });

    handleCancel();
  };

  return (
    <div className="flex bg-gradient-to-b from-containerCreatersBlue to-containerCreatersRed left-10 top-10 fixed p-3 rounded-xl w-3/12">
      <div className="rounded-lg bg-taskCreater px-7 py-4 w-full h-full">
        <header className="flex flex-row justify-between w-full mb-5">
          <h1 className="text-white text-lg">Edit {name}</h1>
          <button onClick={handleCancel} className="text-white">
            <CloseIcon fontSize="large" />
          </button>
        </header>

        <form
          className="w-full flex flex-col gap-6"
          onSubmit={handleSubmit}
          id="creater"
        >
          <label className="w-full flex flex-col gap-3 ">
            <span className="text-createrLabel font-bold text-sm">
              Edit Name
            </span>
            <input
              type="text"
              name="boardName"
              id="boardNameField"
              value={nameValue}
              onChange={handleNameValue}
              className="w-full border-createrInput border-solid border-2 rounded-md text-white p-3 bg-transparent px-3 py-1"
            />
          </label>
          <div className="w-full flex flex-col gap-5 text-white">
            <span className="text-createrLabel font-bold text-sm">
              Edit Logo
            </span>
            <LogosBoardInput logos={logos} selectLogo={logo} />
          </div>

          <div className="flex flex-row gap-5 justify-start w-full">
            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-1.5 text-sm rounded-2xl flex flex-row items-center justify-around w-3/12"
            >
              Save
              <CheckIcon fontSize="small" className="inline-block" />
            </button>
            <button
              className="border-2 bg-red-700 border-solid hover:bg-red-600 active:bg-red-500 border-red-800 text-white px-5 py-1.5 text-sm rounded-2xl"
              type="button"
              onClick={handleDelete}
            >
              Delete Board
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BoardOptionsCard;
