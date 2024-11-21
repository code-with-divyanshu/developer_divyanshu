import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mb-20">
      <div className="flex sm:flex-row flex-col items-center justify-between lg:items-start lg:flex-row gap-4 lg:p-24 md:p-16 p-6">
        <div className="">
          <Image src="/web-development.png" alt="Logo" width={80} height={80} />
        </div>
        <div className="text-center">
          <h2 className="text-purple-500 font-bold">Location</h2>
          <p>Sarswati Vihar, E-Block</p>
          <p>Dehradun, 248001</p>
          <p>Uttarakhand, India</p>
        </div>
        <div className="text-center">
          <h2 className="text-purple-500 font-bold">Contact</h2>
          <p>Sarswati Vihar, E-Block</p>
          <p>Dehradun, 248001</p>
          <p>Uttarakhand, India</p>
        </div>
      </div>
      <div className="text-center">
        <p>© 2024 Developer Divyanshu || All Copy Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
