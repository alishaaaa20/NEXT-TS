import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1>About Us</h1>
      <p>This is the about page.</p>
      <Link href="/" legacyBehavior>
        <a>Go back to Home Page</a>
      </Link>
    </div>
  );
};

export default About;
