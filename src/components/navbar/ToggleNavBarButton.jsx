import MenuIcon from "@mui/icons-material/Menu";

// eslint-disable-next-line react/prop-types
const ToggleNavBarButton = ({ onClick, classes }) => {
  return (
    <button className={`text-white ${classes}`} onClick={onClick}>
      <MenuIcon fontSize="large" />
    </button>
  );
};

export default ToggleNavBarButton;
