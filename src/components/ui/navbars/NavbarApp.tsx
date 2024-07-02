import { getProjects } from "@/api/projects/crud";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import AppDrawer from "@/components/drawers/AppDrawer";
import { getServerSession } from "next-auth";

const NavbarApp: React.FC = async () => {
  const session = await getServerSession(authOptions);
  const projects = await getProjects({
    userId: session?.user.id as string,
  });
  return (
    <nav className="">
      <AppDrawer initialProjects={projects} />
    </nav>
  );
};

export default NavbarApp;
