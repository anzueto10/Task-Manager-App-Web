import Image from "next/image";

const PersonAvatar = () => {
  return (
    <span
      className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
      data-id="60"
    >
      <Image
        className="spect-square h-full w-full"
        fill
        alt="Avatar"
        src="/placeholder-user.jpg"
      />
    </span>
  );
};

export default PersonAvatar;
