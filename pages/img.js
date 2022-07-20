/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import { IMAGES } from "../config/index.js";

export default function ImgPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LCP Image Benchmark: &lt;img&gt; tag</title>
        <meta name="description" content="LCP Image Benchmark: <img> tag" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>&lt;img&gt; tag</h1>
        <nav className={styles.nav}>
          <Link href="/">&larr; Back to home</Link>
        </nav>
        {IMAGES.map((image, idx) => {
          return (
            <div className={styles.imageWrapper} key={idx}>
              <img
                alt="Awesome image"
                src={`./images/${image}`}
                decoding={idx === 0 ? "sync" : "auto"}
                fetchpriority={idx === 0 ? "high" : "auto"}
                loading={idx === 0 ? "eager" : "lazy"}
                height={800}
                width={640}
              />
            </div>
          );
        })}
      </main>
    </div>
  );
}
