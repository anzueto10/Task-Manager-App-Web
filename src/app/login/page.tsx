import LoginFormBody from "@/components/login/form/FormBody";
import LoginFormImage from "@/components/login/form/FormImage";

const LoginPage: React.FC = () => {
  return (
    <section className="w-full h-full flex flex-row items-center justify-center">
      <article className="flex flex-col items-center justify-center px-6 py-8 h-fit mx-auto w-full md:w-3/4 lg:w-2/4">
        <LoginFormBody />
      </article>
      <article className="w-2/4 hidden  h-full bg-ingi lg:flex">
        <LoginFormImage />
      </article>
    </section>
  );
};

export default LoginPage;
