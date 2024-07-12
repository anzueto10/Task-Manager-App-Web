import { getProjects } from "@/api/projects/crud";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import AppDrawer from "@/components/app/drawers/AppDrawer";
import { getServerSession } from "next-auth";
import Dropdown from "@/components/ui/dropdown/Dropdown";
import { DROPDOWN_USER_OPTIONS } from "@/consts";
import UserIcon from "@/components/ui/icons/UserIcon";
import Link from "next/link";

const NavbarApp: React.FC = async () => {
  const session = await getServerSession(authOptions);
  const projects = await getProjects({
    userId: session?.user.id as string,
  });
  return (
    <nav className="inline-flex items-center">
      <AppDrawer initialProjects={projects} />
      <h1 className="text-2xl font-bold ml-5">
        <Link href="/">Tasker</Link>
      </h1>
      <div className="ml-auto">
        <Dropdown
          options={DROPDOWN_USER_OPTIONS}
          Icon={UserIcon}
          roundedButton="full"
          variableButton="outline"
          toggleTheme
        />
      </div>
    </nav>
  );
};

export default NavbarApp;
