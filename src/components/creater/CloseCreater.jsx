import CloseIcon from "@mui/icons-material/Close";
import useCreater from "../../hooks/useCreater";

const CloseCreater = () => {
  const { setShow } = useCreater();
  const handleClick = () => setShow("");

  return (
    <button className="text-white" onClick={handleClick}>
      <CloseIcon fontSize="large" />
    </button>
  );
};

export default CloseCreater;
