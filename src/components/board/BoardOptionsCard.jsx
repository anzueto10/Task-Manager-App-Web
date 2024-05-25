/* eslint-disable react/prop-types */
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import LogosBoardInput from "./LogosBoardInput";
import logos from "../logos/Logos";
import { useState } from "react";
import useBoard from "../../hooks/useBoard";
import { useMediaQuery } from "react-responsive";

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

  const smlg = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {!smlg && (
        <div className="flex bg-gradient-to-b from-containerCreatersBlue to-containerCreatersRed xl:left-10 xl:top-10 fixed p-3 rounded-xl xl:w-3/12 w-full top-0 left-0">
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
      )}

      {smlg && (
        <div className="bg-taskCreater px-7 py-4 w-full min-h-screen flex flex-col items-center justify-center top-0 left-0 fixed p-3 rounded-xl ">
          <header className="flex flex-row justify-between w-full mb-5">
            <h1 className="text-white text-2xl">Edit {name}</h1>
            <button onClick={handleCancel} className="text-white">
              <CloseIcon fontSize="large" />
            </button>
          </header>

          <form
            className="w-full flex flex-col gap-6 justify-center"
            onSubmit={handleSubmit}
            id="creater"
          >
            <label className="w-full flex flex-col gap-3 ">
              <span className="text-createrLabel font-bold text-lg">
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
              <span className="text-createrLabel font-bold text-lg">
                Edit Logo
              </span>
              <LogosBoardInput logos={logos} selectLogo={logo} />
            </div>

            <div className="flex flex-col gap-5 justify-start w-full">
              <button
                type="submit"
                className="bg-blue-700 w-full text-white px-4 py-1.5 text-sm rounded-2xl flex flex-row items-center gap-3 justify-center"
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
      )}
    </>
  );
};

export default BoardOptionsCard;
