import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="max-w-full bg-slate-900">
      <ul className="max-w-5xl mx-auto text-3xl p-3 text-cyan-50 flex items-center justify-center">
        <li className="p-3">
          <Link href="/">Home</Link>
        </li>
        <li className="p-3">
          <Link href="/about">About</Link>
        </li>
        <li className="p-3">
          <Link href="/repos">Repos</Link>
        </li>
        <li className="p-3">
          <Link href="/blogs">Blogs</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
