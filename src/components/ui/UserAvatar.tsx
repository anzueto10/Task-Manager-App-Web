import { getServerSession } from "next-auth";
import Image from "next/image";

const UserAvatar = async () => {
  const session = await getServerSession();
  return (
    <>
      {session !== null && (
        <Image
          className="relative mr-4 inline-block h-6 w-6 rounded-md object-cover object-center"
          width="24"
          height="24"
          alt={session.user.name as string}
          src={session?.user.image as string}
        />
      )}
    </>
  );
};

export default UserAvatar;
