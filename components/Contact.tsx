"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Button from "./Button";
import { Input, Textarea } from "./Input";

export function Contact() {
  return (
    <section
      id="contact_me"
      className="flex justify-center items-center relative flex-col"
    >
      <div className="max-w-[370px] lg:max-w-4xl sm:max-w-2xl flex flex-col justify-center items-center relative gap-3 w-full my-20">
        <h1 className="relative text-2xl md:text-6xl my-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-purple-600  text-center font-sans font-bold">
          Contact Me
        </h1>
        <p className="lg:text[24px] text-[18px] text-center font-[600] text-gray-500">
          Feel free to reach out to me for any questions or opportunities!
        </p>
        <div className="w-full flex flex-col lg:flex-row gap-3">
          <Input
            type="text"
            placeholder="Enter Your Name"
            className="p-4 py-4 rounded-lg border border-neutral-500 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-400"
          />
          <Input
            type="email"
            placeholder="Enter Your Email"
            className="p-4 py-4 rounded-lg border border-neutral-500 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-400"
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-3">
          <Input
            type="number"
            placeholder="Enter Your Number"
            className="p-4 py-4 rounded-lg border border-neutral-500 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-400"
          />
          <Input
            type="text"
            placeholder="Enter Your Subject"
            className="p-4 py-4 rounded-lg border border-neutral-500 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-400"
          />
        </div>
        <Textarea
          rows={5}
          placeholder="Write Your Message"
          className="p-4 rounded-lg border border-neutral-500 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-400"
        ></Textarea>
        <Button
          type="submit"
          title="Submit"
          className="w-full bg-purple-400 py-4"
        />
      </div>
      <BackgroundBeams />
    </section>
  );
}
