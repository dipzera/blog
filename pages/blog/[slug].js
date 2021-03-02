import Head from "next/head";
import { blogPosts } from "../../lib/data";

export default function BlogPage({ title, date }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{title}</h1>
        <span>{date}</span>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  console.log(context);
  return {
    props: blogPosts.find((item) => item.slug === context.params.slug),
  };
}
export async function getStaticPaths() {
  const foo = {
    paths: blogPosts.map((item) => ({ params: { slug: item.slug } })),
    fallback: false,
  };

  console.log(JSON.stringify(foo, null, 2));
  return foo;
}
