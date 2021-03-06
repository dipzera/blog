import Link from "next/link";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto my-8 w-9/12">
      <header>
        <h1 className="text-6xl font-bold text-center">My blog</h1>
        <nav>
          <ul className="flex flex-row space-x-4 justify-center">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
