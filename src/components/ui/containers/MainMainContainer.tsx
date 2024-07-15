import MainFooter from "../footers/MainFooter";
import MainNavBar from "../navbars/NavBar";

interface Props {
  children: React.ReactNode;
  background?: "muted" | "default";
  notPaddingY?: boolean;
  notPaddingX?: boolean;
}
const MainMainContainer: React.FC<Props> = ({
  children,
  background,
  notPaddingY,
  notPaddingX,
}) => {
  return (
    <>
      <MainNavBar />
      <main
        className={`w-full flex-grow flex flex-col justify-center flex-1 ${
          background === "muted" && "bg-muted-light dark:bg-muted-dark"
        } ${!notPaddingY && "py-12 md:py-24 lg:py-32"} ${
          !notPaddingX && "items-center"
        }`}
      >
        {children}
      </main>
      <MainFooter />
    </>
  );
};

export default MainMainContainer;
