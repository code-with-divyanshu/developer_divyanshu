"use client";
import { skills } from "@/app/constant";
import Image from "next/image";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex justify-center items-center relative flex-col -z-10 my-10"
    >
      <div className="flex flex-col justify-center items-center relative gap-3 w-full my-20">
        <h1 className="relative text-2xl md:text-6xl my-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-purple-600  text-center font-sans font-bold">
          Skills
        </h1>
        <p className="lg:text[24px] text-[18px] text-center font-[600] text-gray-500">
          Here are some of my skills on which I have been worked from past 1
          years.
        </p>
        <div className="w-full flex flex-wrap justify-center mt-[40px] gap-[50px]">
          {skills.map((skill, index) => (
            <BackgroundGradient
              key={index}
              className="rounded-[22px] max-w-sm  bg-white dark:bg-zinc-900 flex flex-row"
            >
              <div className="w-full max-w-[360px] bg-gray-800  rounded-[16px] py-[10px] px-[36px] lg:max-w-[400px] md:max-w-[700px] lg:py-[18] lg:p-[36]">
                <h1 className="text-[28px] font-[600] mb-[20px] text-center bg-clip-text text-transparent bg-gradient-to-b from-teal-500 to-purple-900">
                  {skill.title}
                </h1>
                <div className="flex flex-wrap justify-center gap-3 mb-5">
                  {skill.skills.map((item, index_x) => (
                    <div
                      className="text-[16px] font-normal text-white border-2 border-solid border-teal-900 shadow-lg shadow-violet-800 rounded-md lg:py-[12px] lg:px-[16px] py-[8px] px-[12px] flex justify-center items-center gap-2"
                      key={index_x}
                    >
                      <Image
                        src={item.image}
                        alt="Skills"
                        width={28}
                        height={28}
                      />
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
