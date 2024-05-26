"use client"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import styles from './page.module.css';
import Link from "next/link";
import { useRouter } from "next/navigation";


function Page() {
  const { data: session } = useSession();
  const navigate = useRouter();
  return (
    <>
    <div className={styles.separate}>
        <div className={styles.main}>
        <Image src={session ? session.user.image : ""} width={50} height={50} style={{ borderRadius: "50%" }} />
      <h1 className={styles.text1}>{session && session.user.name}</h1>
      <h2  className={styles.text2}>{session && session.user.email}</h2>
      <button onClick={() => signOut("google")} className={styles.btn}>Sign out</button>
    </div>
    <div>
         <button className="cursor-pointer duration-200 hover:scale-125 active:scale-100" title="Go Back" onClick={()=>navigate.push("/")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="stroke-blue-300">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M11 6L5 12M5 12L11 18M5 12H19"
            style={{ stroke: "black" }}
          ></path>
        </svg>
        <span style={{ marginLeft: "3px" }}>
          <Link href={"/"}>Go Back</Link>
        </span>
      </button>
    </div>
    </div>
    </>

  );
}

export default Page;
