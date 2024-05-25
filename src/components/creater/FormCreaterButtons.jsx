/* eslint-disable react/prop-types */
import CheckIcon from "@mui/icons-material/Check";
import useCreater from "../../hooks/useCreater";

const FormCreaterButtons = ({ type }) => {
  const { setShow } = useCreater();
  const handleCancel = () => setShow("");

  return (
    <div className="flex xl:flex-row flex-col gap-5 justify-start w-full">
      <button
        type="submit"
        className={`bg-blue-700 w-full text-white py-3 xl:px-4 justify-center xl:py-1.5 text-sm rounded-2xl flex flex-row items-center gap-4  ${
          type === "task" ? "xl:w-3/12" : "xl:min-w-[40%]"
        }`}
      >
        {type === "task" ? "Save" : type === "board" && "Create Board"}
        <CheckIcon fontSize="small" className="inline-block" />
      </button>
      <button
        className="bg-transparent w-full xl:w-auto border-2 border-solid border-cancelButtonCreaterForm text-white py-3 xl:px-5 xl:py-1.5 text-sm rounded-2xl"
        onClick={handleCancel}
        type="button"
      >
        Cancel
      </button>
    </div>
  );
};

export default FormCreaterButtons;
