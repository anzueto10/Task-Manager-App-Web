"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

const HomePage: React.FC = () => {
  const { data: session } = useSession();
  return <Link href="/app">{session?.user?.name}</Link>;
};

export default HomePage;
