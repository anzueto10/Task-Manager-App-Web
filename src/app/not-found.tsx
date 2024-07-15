import MainFooter from "@/components/ui/footers/MainFooter";
import MainNavBar from "@/components/ui/navbars/NavBar";

const NotFoundPage = () => {
  return (
    <>
      <MainNavBar />
      <main className="flex-grow">
        <h1>404 not found page</h1>
      </main>
      <MainFooter />
    </>
  );
};

export default NotFoundPage;
