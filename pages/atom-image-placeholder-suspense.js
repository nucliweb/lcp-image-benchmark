/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import styles from "../styles/Home.module.css";

const AtomImage = dynamic(import("@s-ui/react-atom-image"), { ssr: false }); // Async API cannot be server-side rendered
dynamic(import("@s-ui/react-atom-image/lib/index"), { ssr: false }); // Async API cannot be server-side rendered

import { IMAGES } from "../config/index.js";

export default function AtomImagePlaceholderSuspensePage() {
  if (typeof window === "undefined") return <></>;

  return (
    <div className={styles.container}>
      <Head>
        <title>
          LCP Image Benchmark: &lt;AtomImage&gt; Component and Suspense
        </title>
        <meta
          name="description"
          content="LCP Image Benchmark: <AtomImage> Component with Placeholder and Suspense"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          &lt;AtomImage&gt; Component with Placeholder and Suspense
        </h1>
        <nav className={styles.nav}>
          <Link href="/">&larr; Back to home</Link>
        </nav>
        {IMAGES.map((image, idx) => {
          return (
            <Suspense fallback={<></>} key={idx}>
              <div className={styles.imageWrapper}>
                <AtomImage
                  alt="Awesome image"
                  src={`./images/${image}`}
                  decoding={idx === 0 ? "sync" : "auto"}
                  fetchpriority={idx === 0 ? "high" : "auto"}
                  loading={idx === 0 ? "eager" : "lazy"}
                  placeholder={`./images/placeholder/${image}`}
                  height={800}
                  width={640}
                />
              </div>
            </Suspense>
          );
        })}
      </main>
    </div>
  );
}
