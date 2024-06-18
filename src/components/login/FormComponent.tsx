import LoginFormTitle from "@/components/login/FormTitle";
import LoginFormBody from "@/components/login/FormBody";

const FormComponent: React.FC = () => {
  return (
    <div className="flex flex-col w-full max-w-md items-center px-6 py-8 justify-center lg:py-0">
      <LoginFormTitle />
      <LoginFormBody />
    </div>
  );
};

export default FormComponent;
