import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  onClick: () => void;
}

const DropDownStatus: React.FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <ExpandMoreIcon />
    </button>
  );
};

export default DropDownStatus;
