import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px"
          }}
        >
          <Image
            src={"/assets/pascal.jpg"}
            width={88}
            height={88}
            alt=""
            className="profile_img"
            id="profile_img"
          />
          <h4 id="twitter">meta_khal</h4>
          <h4 id="slack" style={{display: "none"}}>Khal</h4>
        </div>

        <div className="link_section">
          <Link href={""} legacyBehavior>
            <a className="link">Twitter Link</a>
          </Link>

          <Link href={"https://training.zuri.team/"} legacyBehavior>
            <a className="link">Zuri Team</a>
          </Link>

          <Link href={"http://books.zuri.team/"} legacyBehavior>
            <a className="link">Zuri books</a>
          </Link>

          <Link href={"https://books.zuri.team/python-for-beginners?ref_id=khal"} legacyBehavior>
            <a className="link">Python Books</a>
          </Link>

          <Link href={"https://background.zuri.team/"} legacyBehavior>
            <a className="link">Background Check for Coders</a>
          </Link>

          <Link href={"https://books.zuri.team/design-rules"} legacyBehavior>
            <a className="link">Design Books</a>
          </Link>
        </div>

        <div style={{maxWidth: "1216px", textAlign: "center", marginTop: "30px"}}>
          <Image src={"/assets/slack.png"} width={20} height={20} alt="slack icon" className="icon"  />
          <Image src={"/assets/github.png"} width={20} height={20} alt="github icon" className="icon" />
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
