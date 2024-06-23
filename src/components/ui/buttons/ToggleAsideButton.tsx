import MenuIcon from "@mui/icons-material/Menu";

interface Props {
  handleClick: () => void;
}

const ToggleAsideButton: React.FC<Props> = ({ handleClick }) => {
  return (
    <>
      <div className="mr-auto">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          data-drawer-target="drawer-navigation"
          data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation"
          onClick={handleClick}
        >
          <MenuIcon />
        </button>
      </div>
    </>
  );
};

export default ToggleAsideButton;
