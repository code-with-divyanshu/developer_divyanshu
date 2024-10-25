"use client";
import { NAV_LINKS } from "@/app/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <nav className="fixed top-0 justify-between  flex lg:justify-evenly items-center px-5 lg:px-28 w-full py-5 bg: backdrop-blur-lg rounded-xl">
      <Link href="/">
        <Image src="/web-development.png" alt="Logo" width={60} height={60} />
      </Link>
      <ul className="hidden lg:flex justify-center gap-10 items-center w-full">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="font-semibold px-3 py-3 cursor-pointer active:border-b-4 border-b-purple-900  hover:font-semibold hover:bg-gray-900 rounded-xl"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flex hidden">
        <Link href="#contact_me">
          <Button
            type="button"
            title="Contact Me"
            className="font-bold flex bg-purple-800 py-3"
          />
        </Link>
      </div>

      {mobileMenu ? (
        <ul className="z-10 absolute shadow-purple-800 rounded-b-md rounded-s-md shadow-2xl top-0 right-0 w-[300px] md:w-[500px] h-[600px] md:h-[700px] bg-gradient-to-t from-purple-500 to-gray-600">
          <Image
            src="/close.svg"
            width={42}
            height={42}
            alt="menu"
            className="inline-block cursor-pointer absolute top-0 right-0"
            onClick={() => setMobileMenu(!mobileMenu)}
          />
          <ul className="flex flex-col relative top-10 justify-center gap-10 items-center w-full">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="font-semibold px-3 py-2 cursor-pointer active:border-b-4 border-b-purple-900  hover:font-semibold hover:bg-gray-900 rounded-xl"
              >
                {link.label}
              </Link>
            ))}
            <Link href="#contact_me">
              <Button
                type="button"
                title="Contact Me"
                className="font-bold flex bg-black py-3"
              />
            </Link>
          </ul>
        </ul>
      ) : (
        <Image
          src="/menu.svg"
          width={32}
          height={32}
          alt="menu"
          className="inline-block cursor-pointer lg:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}
    </nav>
  );
};

export default Navbar;
