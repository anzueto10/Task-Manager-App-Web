"use client";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import Button from "@/components/ui/button/Button";
import { signOut, useSession } from "next-auth/react";

const AccountPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session) return router.push("/login/");
  return (
    <div>
      <h1>Welcome</h1>
      <ul>
        <li>
          <h4>{session.user.name}</h4>
          <h3>{session.user.email}</h3>
          <h3>{session.user.id}</h3>
        </li>

        {session.user.image && (
          <Image
            src={session.user.image}
            alt={session.user.name as string}
            width={50}
            height={50}
          />
        )}
      </ul>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
};

export default AccountPage;
