/* eslint-disable react/prop-types */
import logos from "../logos/Logos";
import getLogoByName from "../../logic/getLogoByName";
import BoardOptionsButton from "./BoardOptionsButton";
import BoardOptionsCard from "./BoardOptionsCard";
import { useState } from "react";

const BoardCard = ({ board, onClick }) => {
  const { name, logo: logoName, selected } = board;
  const Logo = getLogoByName({ logos, logoName });

  const [show, setShow] = useState(false);

  const handleCancel = () => setShow(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setShow(true);
  };

  return (
    <>
      <figure
        className={`w-full rounded-full flex flex-row items-center gap-3 border-2 border-solid ${
          selected ? " border-blue-700" : "border-transparent"
        } p-2 hover:cursor-pointer`}
        onClick={onClick}
      >
        <span className="text-black rounded-full bg-[#f4dca7] p-3">
          <Logo />
        </span>
        <figcaption className="text-white text-lg">{name}</figcaption>
        <div className="ml-auto">
          <BoardOptionsButton onClick={handleClick} />
        </div>
      </figure>

      {show && <BoardOptionsCard board={board} handleCancel={handleCancel} />}
    </>
  );
};

export default BoardCard;
