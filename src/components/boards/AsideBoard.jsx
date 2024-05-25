import AddBoardButton from "../board/AddBoardButton";
import Boards from "../board/Boards";
import useBoard from "../../hooks/useBoard";
import NavBar from "../navbar/NavBar";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import ToggleNavBarButton from "../navbar/ToggleNavBarButton";

const AsideBoard = () => {
  const { boards } = useBoard();

  const [showAside, setShowAside] = useState(false);

  const showAsideClass = showAside ? "left-0" : "-left-full";

  const smlg = useMediaQuery({ query: "(max-width: 1279px)" });

  const handleClick = () => setShowAside(!showAside);

  return (
    <>
      {!smlg && (
        <aside className="min-h-full w-1/5 flex flex-col pt-3">
          <h1 className="text-white text-3xl">Manage Tasks App</h1>
          <section className="pt-4 w-full pr-2 mb-3 flex flex-col gap-3">
            <Boards boards={boards} />
          </section>
          <AddBoardButton />
        </aside>
      )}

      {smlg && (
        <>
          <aside className="z-20">
            <div
              className={`h-full bg-gray-900 fixed xl:w-1/5 flex flex-col pt-3 px-5 transition-all ease-out ${showAsideClass}`}
            >
              <ToggleNavBarButton
                onClick={handleClick}
                classes="text-start mb-4"
              />
              <h1 className="text-white text-3xl">Manage Tasks App</h1>
              <section className="pt-4 w-full pr-2 mb-3 flex flex-col gap-3">
                <Boards boards={boards} />
              </section>
              <AddBoardButton />
            </div>
          </aside>
          <NavBar onClick={handleClick} show={showAside} />
        </>
      )}
    </>
  );
};

export default AsideBoard;
