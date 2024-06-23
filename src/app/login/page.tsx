import LoginFormBody from "@/components/forms/login/FormBody";
import LoginFormTitle from "@/components/forms/login/FormTitle";

const LoginPage: React.FC = () => {
  return (
    <section className="flex flex-col w-full items-center px-6 py-8 h-full lg:py-0">
      <article className="w-full md:w-5/12 h-full flex flex-col justify-center">
        <header className="">
          <LoginFormTitle />
        </header>
        <LoginFormBody />
      </article>
    </section>
  );
};

export default LoginPage;
