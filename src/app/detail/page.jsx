"use client";
import { productContext } from "@/Context/ContextApi";
import Image from "next/image";
import React, { useContext } from "react";
import styles from './page.module.css';
import Link from "next/link";
import { useRouter } from "next/navigation";

function page() {
  const [user, setUser, selected, setSelected] = useContext(productContext);
  const navigate = useRouter();

  return<section className={styles.main}>
  {selected && (
    <div className={styles.back}>
      <h1>{selected.name}</h1>
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
  )}
  <Image src={selected.images} width={700} height={700} />
</section>

}

export default page;
