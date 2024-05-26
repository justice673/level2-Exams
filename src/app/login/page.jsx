"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import { productContext } from "@/Context/ContextApi";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data: session } = useSession();
  console.log(session);
  const router = useRouter();
  const [user, setUser] = useContext(productContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/authentication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  });
  return (
    <div className={styles.main}>
      <div className={styles.mainLeft}></div>
      <div className={styles.mainRight}>
        <div className={styles.main1}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Sign in to Dribbble</h2>
            <button
              type="button"
              className={styles.googlebtn}
              onClick={() => signIn("google")}
              // onClick={()=>signOut("google")}
            >
              Sign in with Google
            </button>
          </form>
          <p className={styles.dont}>
            Don't have an account?{" "}
            <Link href="/signup" className={styles.signup}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
