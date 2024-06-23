"use client";
import ToggleAsideButton from "@/components/ui/buttons/ToggleAsideButton";

const NavbarApp: React.FC = () => {
  const handleClick = () => {};
  return (
    <nav className="">
      <ToggleAsideButton handleClick={handleClick} />
    </nav>
  );
};

export default NavbarApp;
