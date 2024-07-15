import PrivacysContainer from "@/components/privacy/containers/PrivacysContainer";
import MainMainContainer from "@/components/ui/containers/MainMainContainer";

const PrivacyPage = () => {
  return (
    <MainMainContainer notPaddingY notPaddingX>
      <header className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Tasker Privacy Policy
          </h1>
          <p className="mt-4 max-w-[700px] text-mutedForeground-light dark:text-mutedForeground-dark md:text-xl">
            At Tasker, we are committed to protecting your privacy. This policy
            explains how we collect, use, and safeguard your information.
          </p>
        </div>
      </header>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            What is Tasker?
          </h2>
          <p className="mt-4 max-w-[700px] text-mutedForeground-light dark:text-mutedForeground-dark md:text-lg">
            Tasker is a web-based application that helps users manage their
            projects and tasks. It allows you to create, organize, and track
            your work, as well as collaborate with team members.
          </p>
        </div>
      </section>
      <PrivacysContainer />
    </MainMainContainer>
  );
};

export default PrivacyPage;
