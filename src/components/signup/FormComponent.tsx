import SignupFormBody from "@/components/signup/FormBody";
import SignupImageForm from "@/components/signup/FormImage";

const SignupComponent: React.FC = () => {
  return (
    <section className="w-full h-full flex flex-row items-center justify-center">
      <article className="flex flex-col items-center justify-center px-6 py-8 h-fit mx-auto w-full md:w-3/4 lg:w-2/4">
        <SignupFormBody />
      </article>
      <article className="w-2/4 hidden lg:flex">
        <SignupImageForm />
      </article>
    </section>
  );
};

export default SignupComponent;
