import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      img: "https://res.cloudinary.com/codenode/image/upload/v1729695943/divyanshu_brerhn.jpg",
      title: "Freelancer",
      role: "Frontend Developer",
      company: "Various Companies",
      date: "Aug 2024 - Present",
      desc: "Currently working as a freelancer, collaborating with various companies on diverse web development projects. My role includes creating responsive designs, developing dynamic websites, and enhancing user interfaces using modern web technologies. This opportunity allows me to leverage my skills across multiple industries and continuously innovate in the field of web development.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Tailwind CSS",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "WordPress",
        "Elementor",
        "PHP",
        "C++",
      ],
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/mega_blog.png"
              alt="Mega Blog App"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/music_academy.png"
              alt="Music Academy"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      img: "https://res.cloudinary.com/codenode/image/upload/v1729695819/eUttaranchal_bu58xc.jpg",
      title: "Frontend Developer",
      role: "Frontend Developer",
      company: "eUttaranchal",
      date: "Aug 2023 - Jul 2024",
      desc: "As a Frontend Developer at eUttaranchal, I worked on developing and maintaining websites, ensuring responsive and user-friendly designs. I collaborated with the team to create impactful projects, utilizing my expertise in WordPress, Elementor, and modern web technologies like React.js and Tailwind CSS.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "WordPress",
        "Elementor",
        "WooCommerce",
        "PHP",
        "Photoshop",
        "Tailwind CSS",
        "React.js",
      ],
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/euttaranchal.png"
              alt="eUttaranchal"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/scared_yatra.png"
              alt="Sacred Yatra"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      img: "https://res.cloudinary.com/codenode/image/upload/v1729695819/eUttaranchal_bu58xc.jpg",
      title: "Frontend Developer Intern",
      role: "Frontend Developer Intern",
      company: "eUttaranchal",
      date: "Jun 2023 - Aug 2023",
      desc: "During my internship at eUttaranchal, I delved into web development and design, learning HTML, CSS, and JavaScript. I had the opportunity to develop a website for the company and collaborated with experienced professionals. This role was instrumental in shaping my career as a web developer.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "WordPress",
        "Elementor",
        "PHP",
      ],
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/weather.jpg"
              alt="Startup Template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/bank.png"
              alt="Startup Template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <section
      id="experience"
      className="flex justify-center items-center relative flex-col -z-10"
    >
      <div className="flex flex-col justify-center items-center relative gap-3 w-full my-20">
        <h1 className="relative text-2xl md:text-6xl my-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-purple-600  text-center font-sans font-bold">
          Experience
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
