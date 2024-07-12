"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

const HomePage: React.FC = () => {
  const { data: session } = useSession();

  return (
    <Link href="/app" className="text-white">
      <p>{session?.user.id}</p>
      {session?.user.id}
    </Link>
  );
};

export default HomePage;
