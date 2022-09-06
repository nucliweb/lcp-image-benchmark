/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const AtomImage = dynamic(import("@s-ui/react-atom-image"), { ssr: false }); // Async API cannot be server-side rendered
dynamic(import("@s-ui/react-atom-image/lib/index"), { ssr: false }); // Async API cannot be server-side rendered

import { IMAGES } from "../config/index.js";

export default function AtomImagePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LCP Image Benchmark: &lt;AtomImage&gt; Component</title>
        <meta
          name="description"
          content="LCP Image Benchmark: <AtomImage> Component"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>&lt;AtomImage&gt; Component</h1>
        <nav className={styles.nav}>
          <Link href="/">&larr; Back to home</Link>
        </nav>
        {IMAGES.map((image, idx) => {
          return (
            <>
              <div className={styles.imageWrapper} key={idx}>
                <AtomImage
                  alt="Awesome image"
                  src={`./images/${image}`}
                  height={800}
                  width={640}
                />
              </div>
            </>
          );
        })}
      </main>
    </div>
  );
}
