import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Education() {
  const data = [
    {
      img: "https://res.cloudinary.com/codenode/image/upload/v1730021315/uttaranchal_university_kjmcg8.png",
      title: "Uttaranchal University",
      role: "MCA",
      company: "Master of Computer Application",
      desc: "During my internship at eUttaranchal, I delved into web development and design, learning HTML, CSS, and JavaScript. I had the opportunity to develop a website for the company and collaborated with experienced professionals. Following the internship, I was thrilled to join eUttaranchal as a Frontend Developer and WordPress Developer. This transition allowed me to further enhance my skills and contribute to the company's projects in a meaningful way.",
      skills: [
        "Wordpress",
        "Elementor",
        "WooCommerce",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
      ],
    },
    {
      img: "https://res.cloudinary.com/codenode/image/upload/v1730021315/sdsuv_university_t4fqet.png",
      title: "Sri Dev Suman Uttarakhand University",
      role: "BSc",
      company: "Bachelor of Science(PCM)",
      date: "Aug 2023 - Oct 2023",
      desc: "During my internship at eUttaranchal, I delved into web development and design, learning HTML, CSS, and JavaScript. I had the opportunity to develop a website for the company and collaborated with experienced professionals. Following the internship, I was thrilled to join eUttaranchal as a Frontend Developer and WordPress Developer. This transition allowed me to further enhance my skills and contribute to the company's projects in a meaningful way.",
      skills: [
        "Wordpress",
        "Elementor",
        "WooCommerce",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
      ],
    },
    {
      img: "https://res.cloudinary.com/codenode/image/upload/v1730021314/gic_maikoti_xlaor2.jpg",
      title: "G.I.C Maikoti",
      role: "Sineor Secodary",
      company: "Board of School Education Uttarakhand",
      date: "Aug 2023 - Oct 2023",
      desc: "During my internship at eUttaranchal, I delved into web development and design, learning HTML, CSS, and JavaScript. I had the opportunity to develop a website for the company and collaborated with experienced professionals. Following the internship, I was thrilled to join eUttaranchal as a Frontend Developer and WordPress Developer. This transition allowed me to further enhance my skills and contribute to the company's projects in a meaningful way.",
      skills: [
        "Wordpress",
        "Elementor",
        "WooCommerce",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
      ],
    },
    {
      img: "https://res.cloudinary.com/codenode/image/upload/v1730021314/gic_maikoti_xlaor2.jpg",
      title: "G.I.C Maikoti",
      role: "Higher Secodary",
      company: "Board of School Education Uttarakhand",
      date: "Aug 2023 - Oct 2023",
      desc: "During my internship at eUttaranchal, I delved into web development and design, learning HTML, CSS, and JavaScript. I had the opportunity to develop a website for the company and collaborated with experienced professionals. Following the internship, I was thrilled to join eUttaranchal as a Frontend Developer and WordPress Developer. This transition allowed me to further enhance my skills and contribute to the company's projects in a meaningful way.",
      skills: [
        "Wordpress",
        "Elementor",
        "WooCommerce",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
      ],
    },
  ];
  return (
    <section
      id="education"
      className="flex justify-center items-center relative flex-col -z-10"
    >
      <div className="flex flex-col justify-center items-center relative gap-3 w-full my-20">
        <h1 className="text-[32px] text-center font-[600] mt-[12px] text-purple-700 lg:text-[42ppxx] lg:mt-[20px]">
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
