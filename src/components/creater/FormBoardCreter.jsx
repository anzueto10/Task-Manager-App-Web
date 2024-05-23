/* eslint-disable react/prop-types */
import LogosBoardInput from "../board/LogosBoardInput";
import logos from "../logos/Logos";
import FormCreaterButtons from "./FormCreaterButtons";
import useCreater from "../../hooks/useCreater";
import useBoard from "../../hooks/useBoard";
import { useState } from "react";

const FormBoardCreter = () => {
  const { setShow } = useCreater();
  const { addBoard, boards } = useBoard();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const name = data.get("boardName");
    const logo = data.get("logo");

    //Comprobamos que el nombre no este vacio ni el logo
    if (name === "" || name === undefined || name === null) {
      setError("nullName");
      return;
    }

    if (logo === null || logo === undefined) {
      setError("nullLogo");
      return;
    }

    //Comprobamos que el nombre del board este usado ya
    if (boards.find((board) => board.name === name)) {
      setError("ocuped");
      return;
    }

    const selected = boards.length === 0 ? true : false;

    const board = {
      name: name,
      logo: logo,
      selected: selected,
    };

    addBoard({ board });

    setShow("");
  };

  return (
    <form
      className="w-full flex flex-col gap-6"
      onSubmit={handleSubmit}
      id="creater"
    >
      <label className="w-full flex flex-col gap-3 ">
        <span className="text-createrLabel font-bold text-lg lg:text-sm">
          Board Name
        </span>
        <input
          type="text"
          name="boardName"
          id="boardNameField"
          placeholder="My Board"
          className="w-full border-createrInput border-solid border-2 rounded-md text-white p-3 bg-transparent px-3 py-1"
        />
        {error === "nullName" ? (
          <div className="text-red-500 text-base">
            Por favor completa este campo
          </div>
        ) : (
          error === "ocuped" && (
            <div className="text-red-500 text-base">
              Ya existe un board con este nombre
            </div>
          )
        )}
      </label>
      <div className="w-full flex flex-col gap-5 text-white">
        <span className="text-createrLabel font-bold text-sm">Logo</span>
        <LogosBoardInput logos={logos} />
        {error === "nullLogo" && (
          <div className="text-red-500 text-base">
            Seleccina un logo para el board
          </div>
        )}
      </div>

      <FormCreaterButtons type="board" />
    </form>
  );
};

export default FormBoardCreter;
