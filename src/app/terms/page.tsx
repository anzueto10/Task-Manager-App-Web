import TermsContainer from "@/components/terms/containers/TermsContainer";
import MainMainContainer from "@/components/ui/containers/MainMainContainer";

const TermsPage = () => {
  return (
    <MainMainContainer notPaddingX notPaddingY>
      <header className="bg-primary-light dark:bg-primary-dark text-primaryForeground-light dark:text-primaryForeground-dark py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-light dark:text-secondary-dark">
            Terms of Service
          </h1>
          <p className="mt-2 text-lg md:text-xl">
            Welcome to Tasker, our project management web app. These terms
            outline your rights and responsibilities as a user.
          </p>
        </div>
      </header>
      <TermsContainer />
    </MainMainContainer>
  );
};

export default TermsPage;
