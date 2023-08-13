"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [open, setOpen] = useState(false);

  function handleCLick() {
    setOpen((cur) => (cur = !open));
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="max-w-full bg-slate-900">
      <button
        className="fixed md:hidden top-0 w-full h-16 bg-slate-900"
        onClick={handleCLick}
      >
        {!open ? (
          <HiMenuAlt3 className="md:hidden text-6xl ml-auto text-slate-50" />
        ) : (
          <IoCloseSharp className="md:hidden text-6xl ml-auto text-slate-50" />
        )}
      </button>

      {/* <button className="text-3xl bg-white" onClick={handleCLick}>
        {" "}
        click
      </button> */}
      <div
        className={
          open
            ? "block transition duration-300 fixed top-14 overflow-hidden md:overflow-auto md:static w-full md:w-auto h-screen md:h-auto bg-slate-900"
            : "hidden transition duration-300 md:block"
        }
      >
        <ul className="max-w-5xl mx-auto text-3xl p-5 md:p-3 text-cyan-50 md:flex items-center justify-center">
          <li className="p-3 text-center" onClick={closeMenu}>
            <Link href="/">Home</Link>
          </li>
          <li className="p-3 text-center" onClick={closeMenu}>
            <Link href="/about">About</Link>
          </li>
          <li className="p-3 text-center" onClick={closeMenu}>
            <Link href="/repos">Repos</Link>
          </li>
          <li className="p-3 text-center" onClick={closeMenu}>
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
