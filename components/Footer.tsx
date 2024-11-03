import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:p-24 md:p-16 p-6">
      <div className="">
        <Image src="/web-development.png" alt="Logo" width={80} height={80} />
      </div>
      <div className="">2</div>
      <div className="">3</div>
      <div className="">4</div>
    </div>
  );
};

export default Footer;
