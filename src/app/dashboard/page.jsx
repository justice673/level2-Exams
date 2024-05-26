"use client"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

function Page() {
  const { data: session } = useSession();
  return (
    <div>
        <Image src={session ? session.user.image : ""} width={50} height={50} />
      <h1>{session && session.user.name}</h1>
      <h2>{session && session.user.email}</h2>
      <button onClick={() => signOut("google")}>log out</button>
    </div>
  );
}

export default Page;
