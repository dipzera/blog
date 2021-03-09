import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">About</a>
        </h1>
      </main>
    </div>
  );
}
