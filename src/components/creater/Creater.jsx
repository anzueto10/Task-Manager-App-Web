import CloseCreater from "./CloseCreater";
import FormBoardCreter from "./FormBoardCreter";
import FormTaskCreater from "./FormTaskCreater";
import { useMediaQuery } from "react-responsive";

/* eslint-disable react/prop-types */
const Creater = ({ type }) => {
  const smlg = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {smlg && (
        <div className="bg-taskCreater px-7 py-4 w-full flex flex-col absolute z-20 min-h-screen justify-center">
          <header className="flex flex-row justify-between w-full mb-5">
            <h1 className="text-white xl:text-lg text-2xl flex">
              {type === "task"
                ? "Task Details"
                : type === "board" && "New Board"}
            </h1>
            <CloseCreater />
          </header>
          {type === "task" && (
            //RENDER IF IS A TASK CREATER
            <FormTaskCreater />
          )}

          {type === "board" && (
            //RENDER ONLY IF IS A BOARD CREATER
            <FormBoardCreter />
          )}
        </div>
      )}

      {!smlg && (
        <div
          className={`flex bg-gradient-to-b from-containerCreatersBlue xl:h-auto to-containerCreatersRed xl:top-auto ${
            type === "task"
              ? "xl:right-10 xl:bottom-10"
              : "xl:left-10 xl:top-10"
          } absolute p-3 rounded-xl xl:w-3/12 z-20 w-full min-h-screen xl:min-h-0`}
        >
          <div className="rounded-lg bg-taskCreater px-7 py-4 w-full flex flex-col">
            <header className="flex flex-row justify-between w-full mb-5">
              <h1 className="text-white xl:text-lg text-2xl flex">
                {type === "task"
                  ? "Task Details"
                  : type === "board" && "New Board"}
              </h1>
              <CloseCreater />
            </header>
            {type === "task" && (
              //RENDER IF IS A TASK CREATER
              <FormTaskCreater />
            )}

            {type === "board" && (
              //RENDER ONLY IF IS A BOARD CREATER
              <FormBoardCreter />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Creater;
