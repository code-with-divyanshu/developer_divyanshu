"use client";
import { Bio } from "@/app/constant";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="about"
      className="xl:p-20 p-10 lg:my-10 my-20 gap-10 flex justify-center flex-col-reverse lg:flex-row items-center"
    >
      <div className="mt-20 lg:p-7 w-full flex flex-col justify-center items-center">
        <h1 className="w-full text-[52px] lg:text-[80px] leading-tight text-start">
          Hello, Myself <br />
          <span className="text-purple-700">{Bio.name}</span>
          <br />I am a
          <span className="text-purple-700 text-[32px] lg:text-[52px]">
            <Typewriter
              options={{
                strings: Bio.roles,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <p className="my-5 text-xl text-justify">{Bio.description}</p>
        <div className="mt-10 w-full flex justify-center gap-20 md:gap-40 items-center">
          <Link href="/">
            <Button
              type="button"
              title="Github"
              className="bg-purple-700 lg:rounded-3xl shadow-md shadow-blue-300 px-5 lg:px-10 py-4"
            />
          </Link>
          <Link href="/">
            <Button
              type="button"
              title="Download Resume"
              className="bg-purple-700 lg:rounded-3xl shadow-md shadow-blue-300 lg:px-10 py-4"
            />
          </Link>
        </div>
      </div>

      <div className="w-full flex justify-center xl:justify-end items-center">
        <Image
          src="/divyanshu.jpg"
          alt="Divyanshu Bartwal"
          width={600}
          height={500}
          className="rounded-full shadow-2xl shadow-violet-900"
        />
      </div>
    </section>
  );
};

export default Hero;
