import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Link href="/">
          <a className="link">← Back to home</a>
        </Link>

        <h1 className="title">About tvDB</h1>

        <p className="description">
          Get started by editing <code className="code">pages/index.js</code>
        </p>
      </main>
    </div>
  );
}
