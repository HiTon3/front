"use client";

import Link from "next/link";

const Funnel = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/blog/hello-world">Blog Post</Link>
        </li>
      </ul>
    </>
  );
};

export default Funnel;
