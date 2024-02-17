"use client";

import Link from "next/link";

const Router = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/quest">해몽</Link>
        </li>
        <li>
          <Link href="/about">탐색</Link>
        </li>
        <li>
          <Link href="/history">기록</Link>
        </li>
      </ul>
    </>
  );
};

export default Router;
