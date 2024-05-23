import ToggleNavBarButton from "./ToggleNavBarButton";

// eslint-disable-next-line react/prop-types
const NavBar = ({ onClick, show }) => {
  return (
    <nav className="w-full flex flex-row sticky py-3 pl-5 z-10 min-h-[59px]">
      {!show && <ToggleNavBarButton onClick={onClick} />}
    </nav>
  );
};

export default NavBar;
