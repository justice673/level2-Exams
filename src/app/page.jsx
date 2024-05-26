"use client";
import React, { useContext } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { productContext } from "@/Context/ContextApi";
import { useRouter } from "next/navigation";

const developers = [
  {
    name: "John Doe",
    occupation: "Software Engineer",
    images: "https://news.illinois.edu/files/6367/804895/163505.jpg",
  },
  {
    name: "James Smith",
    occupation: "Graphic Designer",
    images:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    name: "Alice Johnson",
    occupation: "Product Manager",
    images:
      "https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-10-1.jpeg",
  },
  {
    name: "Robert Brown",
    occupation: "Data Scientist",
    images:
      "https://www.sydney.edu.au/content/dam/corporate/images/news-and-opinion/news/2023/April/alon-loeffler.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg",
  },
  {
    name: "Emily Davis",
    occupation: "UX Designer",
    images:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Michael Wilson",
    occupation: "Marketing Specialist",
    images:
      "https://upload.wikimedia.org/wikipedia/en/a/a3/JohnKanzius2005Photo.PNG",
  },
  {
    name: "Sarah Lee",
    occupation: "Financial Analyst",
    images:
      "https://wildgreatwall.com/wp-content/uploads/2023/07/Most-Famous-Chinese-People-30.jpg",
  },
  {
    name: "David Kim",
    occupation: "Operations Manager",
    images:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Yang_Liwei.jpg/1200px-Yang_Liwei.jpg",
  },
  {
    name: "Linda Martinez",
    occupation: "HR Specialist",
    images: "https://guardian.ng/wp-content/uploads/2021/04/Seun.jpg",
  },
  {
    name: "James Taylor",
    occupation: "Business Analyst",
    images:
      "https://www.lovepanky.com/wp-content/uploads/2020/11/what-makes-a-man-a-man-1.jpg",
  },
];


const designs = [
  {
    images:"https://cdn.dribbble.com/userupload/14682332/file/original-734ec34eda047fda800982c36f754639.jpg?resize=320x240&vertical=center",
    name:"Jim Kennelly"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14719420/file/original-e314967d8745325af5719e4a217dde35.jpg?crop=278x323-1109x946&resize=320x240&vertical=center",
    name:"Steven Noble"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14363439/file/original-00a6a46c6999e22a1b5353948e9a98e5.jpg?resize=320x240&vertical=center",
    name:"Coric Design"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14363797/file/original-bdac350462fe07773c06794e32751ef6.jpg?crop=0x652-1500x1777&resize=320x240&vertical=center",
    name:"Folio Illustration"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14703100/file/original-121a1ebcfb59ad1dc0922ad2bce92607.jpg?crop=68x51-1532x1149&resize=320x240&vertical=center",
    name:"Skilline Design"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14695999/file/original-b78b7e5fcaabbda4c198dd70b7b233cd.jpg?resize=320x240&vertical=center",
    name:"tubik"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14677457/file/original-112c633a99247d313a11ff70cc06cb45.jpg?crop=61x316-1136x1123&resize=320x240&vertical=center",
    name:"dongkyu lim"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14667548/file/original-757dc46ab8ea0a585b3c4992fb752b59.png?crop=0x0-4000x3000&resize=320x240&vertical=center",
    name:"Vedant Hegde"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14737039/file/original-f395c72718d0fd71cae7f0120da1662c.png?resize=320x240&vertical=center",
    name:"Srdjan Vidakovic"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14665474/file/original-02c63ec63c940ba6d536b79732144287.jpg?resize=320x240&vertical=center",
    name:"Damian Orellana"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14726906/file/original-5a1c05e8eaf254150406a0a67134f60a.jpg?crop=0x571-1400x1621&resize=320x240&vertical=center",
    name:"Daniele Simonelli"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14645444/file/original-2357bbb961bc57c8f844a5def7d606ca.png?crop=0x0-6000x4500&resize=320x240&vertical=center",
    name:"Tommy Chandra"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14615425/file/original-883c845e61e3e2706f33419294e17d0b.jpg?resize=320x240&vertical=center",
    name:"Tyler Pate"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14736257/file/original-7d0e3d00ec07b136bc795fece1aec838.jpg?resize=320x240&vertical=center",
    name:"Ben Didier"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14697683/file/original-48d655a72a48d9d199ffe4051d53b230.png?crop=0x0-2084x1563&resize=320x240&vertical=center",
    name:"Mick Champayne"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14687970/file/original-76289ad2ae237bb8bc5b1a3ca2494af3.jpg?resize=320x240&vertical=center",
    name:"Adam Quest"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14699556/file/original-d1b809469abf7bba06ea66ac0cd2e634.png?resize=320x240&vertical=center",
    name:"Emir Ayouni"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14695458/file/original-0eab14f85da07fb6dc3c5a29660f1a37.jpg?resize=320x240&vertical=center",
    name:"Uran Duo"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14719446/file/original-f870931dd7ad250788b9c6df1fe69eac.jpg?crop=344x53-1464x893&resize=320x240&vertical=center",
    name:"Jessie Maisonneuve"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14680970/file/original-2a8d1357488f134d679a075f8518646e.png?resize=320x240&vertical=center",
    name:"Manuel Cetina"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14747591/file/original-efa838a5658b0e599fa9ff78be8b9f75.png?resize=320x240&vertical=center",
    name:"Alex Krugli"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14631503/file/original-26f3b33f5c9d64a95340f63d83138280.jpg?resize=320x240&vertical=center",
    name:"Roberlan Cetina"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14676077/file/original-4087c2e2085bcc0327b534615a0ec3c0.jpg?resize=320x240&vertical=center",
    name:"Manuel Noble"
  },
   {
    images:"https://cdn.dribbble.com/userupload/14683739/file/original-ecac936512ac9a294168fb22c0e61c7b.jpg?resize=320x240&vertical=center",
    name:"Manuel Cetina"
  },
  {
    images:"https://cdn.dribbble.com/userupload/14686450/file/original-456d5d82aa154e520d4ad80366811fc2.jpg?resize=320x240&vertical=center",
    name:"Mary Maka"
  },
  {
    images:"https://cdn.dribbble.com/userupload/14644249/file/original-63a394307216e0e755dcef4b3812e133.jpg?resize=320x240&vertical=center",
    name:"Folio Illustation"
  },
          {
    images:"https://cdn.dribbble.com/userupload/14752299/file/original-e1f0a5ea8738102d8663c7ff93b217ab.png?crop=0x236-1078x1044&resize=320x240&vertical=center",
    name:"Tommy Chandra"
  },
          {
    images:"https://cdn.dribbble.com/userupload/14665024/file/original-940f8808df37daa03a6bc091fe7312e3.jpg?resize=320x240&vertical=center",
    name:"Tyler Pate"
  },
]


const Page = () => {
  const { data: session } = useSession();
  const [user, setUser] = useContext(productContext);
  const router = useRouter();

  return (
    <>
      <div className={styles.homePage}>
        <nav className={styles.navBar}>
          <ul className={styles.navLinks}>
            <li className={styles.navLink}>Find Designers</li>
            <li className={styles.navLink}>Inspiration</li>
            <li className={styles.navLink}>Courses</li>
            <li className={styles.navLink}>Jobs</li>
            <li className={styles.navLink}>Go Pro</li>
          </ul>
          <h2>Dribbble</h2>
          <div className={styles.nav}>
            <input
              type="text"
              placeholder="Search..."
              className={styles.searchInput}
            />
            {session ? (
              <div className="image" onClick={() => router.push("/dashboard")}>
                <Image src={session.user.image} width={100} height={100} />
              </div>
            ) : (
              <>
                <button className={styles.loginButton}>
                  <Link href="/login"> Log in</Link>
                </button>
                <button className={styles.signupButton}>Sign up</button>
              </>
            )}
          </div>
        </nav>
        <header className={styles.header}>
          <button className={styles.overButton}>
            Over 3 million ready-to-work creatives!
          </button>
          <h1 className={styles.title}>
            {"The world's destination"} <br /> {"for design"}
          </h1>
          <p className={styles.subtitle}>
            Get inspired by the work of millions of top-rated designers &
            agencies around the world.
          </p>
          <button className={styles.getStartedButton}>Get started</button>
        </header>
      </div>
      <div className={styles.main}>
        <div className={styles.roller}>
          <div className={styles.container}>
            {developers.map((developer, index) => (
              <div key={index} className={styles.card}>
                <img
                  src={developer.images}
                  alt={developer.name}
                  style={{ width: "250px", height: "250px" }}
                />
                <h2>{developer.name}</h2>
                <p>{developer.occupation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1 className={styles.middletext}>Explore inspiring designs</h1>
      <div className={styles.main1}>
          <div className={styles.container1}>
            {designs.map((design, index) => (
              <div key={index} className={styles.card1}>
                <img
                  src={design.images}
                  alt={design.name}
                  style={{ width: "250px", height: "250px" }}
                />
                <p>{design.name}</p>
              </div>
            ))}
          </div>
      </div>
            </>
  );
};

export default Page;
