import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Education() {
  const data = [
    {
      img: "https://res.cloudinary.com/codenode/image/upload/v1730021315/uttaranchal_university_kjmcg8.png",
      title: "Uttaranchal University",
      course: "MCA",
      stream: "Master of Computer Applications",
      date: "Aug 2024 - Present",
      desc: "Currently pursuing my Master's in Computer Applications at Uttaranchal University. During my internship at eUttaranchal, I gained hands-on experience in web development and design, focusing on HTML, CSS, and JavaScript. I developed a website for the company and collaborated with seasoned professionals. Subsequently, I joined eUttaranchal as a Frontend and WordPress Developer, enhancing my skills and contributing to impactful projects.",
    },
    {
      img: "https://res.cloudinary.com/codenode/image/upload/v1730021315/sdsuv_university_t4fqet.png",
      title: "Sri Dev Suman Uttarakhand University",
      course: "BSc",
      stream: "Physics, Chemistry, and Mathematics",
      date: "Aug 2019 - Dec 2022",
      desc: "Graduated with a Bachelor of Science in Physics, Chemistry, and Mathematics from Sri Dev Suman Uttarakhand University. This program strengthened my analytical and problem-solving skills. Alongside my studies, I pursued web development independently, acquiring a solid foundation in building functional and visually appealing websites.",
    },
    {
      img: "https://res.cloudinary.com/codenode/image/upload/v1730021314/gic_maikoti_xlaor2.jpg",
      title: "G.I.C Maikoti",
      course: "Senior Secondary",
      stream: "Science with Mathematics",
      date: "Apr 2018 - Apr 2019",
      desc: "Completed Class 12 education at G.I.C Maikoti, specializing in Science with Mathematics. This phase laid the foundation for my interest in technology and problem-solving.",
    },
    {
      img: "https://res.cloudinary.com/codenode/image/upload/v1730021314/gic_maikoti_xlaor2.jpg",
      title: "G.I.C Maikoti",
      course: "Higher Secondary",
      stream: "Science with Mathematics",
      date: "Apr 2016 - Apr 2017",
      desc: "Completed Class 10 education at G.I.C Maikoti, with a focus on Science and Mathematics. This period developed my curiosity and aptitude for analytical thinking.",
    },
  ];

  return (
    <section
      id="education"
      className="flex justify-center items-center relative flex-col -z-10"
    >
      <div className="flex flex-col justify-center items-center relative gap-3 w-full my-20">
        <h1 className="relative text-2xl md:text-6xl my-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-purple-600  text-center font-sans font-bold">
          Education
        </h1>
        <p className="lg:text[24px] text-[18px] text-center font-[600] text-gray-500">
          I&apos;ve been working as Front End Developer for the past 1 years.
          Here&apos;s a timeline of my journey.
        </p>
        <div className="w-full flex justify-center items-center">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  );
}
