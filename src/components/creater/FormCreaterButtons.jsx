/* eslint-disable react/prop-types */
import CheckIcon from "@mui/icons-material/Check";
import useCreater from "../../hooks/useCreater";

const FormCreaterButtons = ({ type }) => {
  const { setShow } = useCreater();
  const handleCancel = () => setShow("");

  return (
    <div className="flex lg:flex-row flex-col gap-5 justify-start w-full">
      <button
        type="submit"
        className={`bg-blue-700 w-full text-white py-3 lg:px-4 lg:py-1.5 text-sm rounded-2xl flex flex-row items-center justify-around ${
          type === "task" ? "lg:w-3/12" : "lg:min-w-[40%]"
        }`}
      >
        {type === "task" ? "Save" : type === "board" && "Create Board"}
        <CheckIcon fontSize="small" className="inline-block" />
      </button>
      <button
        className="bg-transparent w-full lg:w-auto border-2 border-solid border-cancelButtonCreaterForm text-white py-3 lg:px-5 lg:py-1.5 text-sm rounded-2xl"
        onClick={handleCancel}
        type="button"
      >
        Cancel
      </button>
    </div>
  );
};

export default FormCreaterButtons;
