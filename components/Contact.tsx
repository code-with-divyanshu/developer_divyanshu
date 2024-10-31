"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Button from "./Button";

export function Contact() {
  return (
    <div
      id="contact_me"
      className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
    >
      <div className="max-w-2xl lg:max-w-4xl lg:w-full mx-auto z-20">
        <h1 className="relative z-10 text-2xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-purple-600  text-center font-sans font-bold">
          Contact Me
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Feel free to reach out to me for any questions or opportunities!
        </p>
        <div className="flex flex-col lg:flex-row gap-3 z-20">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="p-4 rounded-lg border border-neutral-500 focus:ring-2 focus:ring-teal-500  w-full relative z-30 mt-4  bg-neutral-950 placeholder:text-neutral-400"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-4 rounded-lg border border-neutral-500 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-400"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-3 z-20">
          <input
            type="number"
            placeholder="Enter Your Number"
            className="p-4 rounded-lg border border-neutral-500 focus:ring-2 focus:ring-teal-500  w-full relative z-30 mt-4  bg-neutral-950 placeholder:text-neutral-400"
          />
          <input
            type="text"
            placeholder="Enter Your Subject"
            className="p-4 rounded-lg border border-neutral-500 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-400"
          />
        </div>
        <textarea
          rows={5}
          placeholder="Write Your Message"
          className="p-4 rounded-lg border border-neutral-500 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-400"
        ></textarea>
        <Button
          type="submit"
          title="Submit"
          className="w-full bg-purple-400 py-4"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
