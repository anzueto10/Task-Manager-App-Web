import CloseCreater from "./CloseCreater";
import FormBoardCreter from "./FormBoardCreter";
import FormTaskCreater from "./FormTaskCreater";

/* eslint-disable react/prop-types */
const Creater = ({ type }) => {
  return (
    <div
      className={`flex bg-gradient-to-b from-containerCreatersBlue to-containerCreatersRed lg:top-auto ${
        type === "task" ? "lg:right-10 lg:bottom-10" : "lg:left-10 lg:top-10"
      } fixed p-3 rounded-xl lg:w-3/12 z-20 top-32 w-full`}
    >
      <div className="rounded-lg bg-taskCreater px-7 py-4 w-full">
        <header className="flex flex-row justify-between w-full mb-5">
          <h1 className="text-white lg:text-lg text-2xl">
            {type === "task" ? "Task Details" : type === "board" && "New Board"}
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
  );
};

export default Creater;
