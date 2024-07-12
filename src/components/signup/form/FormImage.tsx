import Image from "next/image";

const SignupImageForm: React.FC = () => {
  return (
    <div className="p-20 relative">
      <Image
        fill={true}
        src="https://res.cloudinary.com/dmdjzoset/image/upload/v1718737744/tasker/svg/hjbl0dznlvdaagq6ad46.svg"
        alt=""
        className="dark:hidden"
      />

      <Image
        fill={true}
        src="
  https://res.cloudinary.com/dmdjzoset/image/upload/v1718748698/tasker/svg/pmcp73kozwplgqmsyomb.svg"
        alt=""
        className="hidden dark:block"
      />
    </div>
  );
};

export default SignupImageForm;
