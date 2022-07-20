/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const AtomImage = dynamic(import("@s-ui/react-atom-image"), { ssr: false }); // Async API cannot be server-side rendered
dynamic(import("@s-ui/react-atom-image/lib/index"), { ssr: false }); // Async API cannot be server-side rendered

import { IMAGES } from "../config/index.js";

export default function AtomImagePlaceholderFirstImagePage() {
  if (typeof window === "undefined") return <></>;

  return (
    <div className={styles.container}>
      <Head>
        <title>
          LCP Image Benchmark: &lt;AtomImage&gt; Component in the first image
        </title>
        <meta
          name="description"
          content="LCP Image Benchmark: <AtomImage> Component with Placeholder in the first image"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          &lt;AtomImage&gt; Component with Placeholder in the first image
        </h1>
        <nav className={styles.nav}>
          <Link href="/">&larr; Back to home</Link>
        </nav>
        {IMAGES.map((image, idx) => {
          return (
            <div className={styles.imageWrapper} key={idx}>
              <AtomImage
                alt="Awesome image"
                src={`./images/${image}`}
                decoding={idx === 0 ? "sync" : "auto"}
                fetchpriority={idx === 0 ? "high" : "auto"}
                loading={idx === 0 ? "eager" : "lazy"}
                placeholder={idx === 0 ? `./images/placeholder/${image}` : null}
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
