import Head from "next/head";
import Link from "next/link";
import { blogPosts } from "../lib/data";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          <a href="https://nextjs.org">My blog</a>
        </h1>
      </main>
      <div>
        {blogPosts.map((post) => (
          <div key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
            <br />
            <span>{post.date}</span>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
