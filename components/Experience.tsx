import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      img: "https://res.cloudinary.com/codenode/image/upload/v1729695943/divyanshu_brerhn.jpg",
      title: "2024(Persent)",
      role: "Freelancer",
      company: "eUttaranchal",
      desc: "During my internship at eUttaranchal, I delved into web development and design, learning HTML, CSS, and JavaScript. I had the opportunity to develop a website for the company and collaborated with experienced professionals. Following the internship, I was thrilled to join eUttaranchal as a Frontend Developer and WordPress Developer. This transition allowed me to further enhance my skills and contribute to the company's projects in a meaningful way.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Tailwind CSS",
        "React Js",
        "Next Js",
        "Node Js",
        "Express Js",
        "MongoDB",
        "Wordpress",
        "Elementor",
        "PHP",
        "C++",
      ],
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/mega_blog.png"
              alt="Mega Blog App"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/music_acedmy.png"
              alt="Music Accedmy"
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
      title: "06/2023-07/2024",
      role: "Frontend Developer",
      company: "eUttaranchal",
      date: "Aug 2023 - Oct 2023",
      desc: "During my internship at eUttaranchal, I delved into web development and design, learning HTML, CSS, and JavaScript. I had the opportunity to develop a website for the company and collaborated with experienced professionals. Following the internship, I was thrilled to join eUttaranchal as a Frontend Developer and WordPress Developer. This transition allowed me to further enhance my skills and contribute to the company's projects in a meaningful way.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Wordpress",
        "Elementor",
        "WooCommerce",
        "PHP",
        "PHOTOSHOP",
        "Tailwind CSS",
        "React Js",
      ],
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
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
      title: "12/2024-06/2023",
      role: "Frontend Developer Intern",
      company: "eUttaranchal",
      date: "Aug 2023 - Oct 2023",
      desc: "During my internship at eUttaranchal, I delved into web development and design, learning HTML, CSS, and JavaScript. I had the opportunity to develop a website for the company and collaborated with experienced professionals. Following the internship, I was thrilled to join eUttaranchal as a Frontend Developer and WordPress Developer. This transition allowed me to further enhance my skills and contribute to the company's projects in a meaningful way.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Wordpress",
        "Elementor",
        "PHP",
      ],
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
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
        <h1 className="text-[32px] text-center font-[600] mt-[12px] text-purple-700 lg:text-[42ppxx] lg:mt-[20px]">
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
