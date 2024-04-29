import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Link href="/about" legacyBehavior>
        <a>Go to Another Page</a>
      </Link>
    </div>
  );
};

export default Home;
