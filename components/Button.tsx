import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  className: string;
};
const Button = ({ type, title, className }: ButtonProps) => {
  return (
    <button
      type={type}
      title={title}
      className={`px-3 whitespace-nowrap w-full py-2 rounded-md ${
        className || ""
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
