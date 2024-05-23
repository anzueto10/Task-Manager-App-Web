/* eslint-disable react/prop-types */
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const BoardOptionsButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="text-white">
      <MoreHorizIcon fontSize="large" />
    </button>
  );
};

export default BoardOptionsButton;
