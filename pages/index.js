import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LCP Image Benchmark</title>
        <meta name="description" content="LCP Image Benchmark" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>LCP Image Benchmark</h1>

        <div className={styles.grid}>
          <Link href="/img">
            <a className={styles.card}>
              <h2>&lt;img&gt; tag &rarr;</h2>
              <p>Load list of images with native &lt;img&gt; tag</p>
            </a>
          </Link>
          <Link href="/atom-image">
            <a className={styles.card}>
              <h2>&lt;AtomImage&gt; &rarr;</h2>
              <p>Load list of images with SUI &lt;AtomImage&gt; component</p>
            </a>
          </Link>
          <Link href="/atom-image-placeholder">
            <a className={styles.card}>
              <h2>&lt;AtomImage&gt; &rarr;</h2>
              <p>
                Load list of images with SUI &lt;AtomImage&gt; component with
                placeholder
              </p>
            </a>
          </Link>
          <Link href="/atom-image-placeholder-first-image">
            <a className={styles.card}>
              <h2>&lt;AtomImage&gt; &rarr;</h2>
              <p>
                Load list of images with SUI &lt;AtomImage&gt; component with
                placeholder in the first image
              </p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
