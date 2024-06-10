import ButtonProjectsSideBar from "@/components/sidebars/ButtonProjectsSideBar";

interface Props {
  handleShow: () => void;
}

const NavBarSideBar: React.FC<Props> = ({ handleShow }) => {
  return (
    <nav className="">
      <ButtonProjectsSideBar handleShow={handleShow} />
    </nav>
  );
};

export default NavBarSideBar;
