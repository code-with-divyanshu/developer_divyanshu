import { textarea } from "framer-motion/client";
import React from "react";

type InputProps = {
  type: string;
  placeholder: string;
  className: string;
};

const Input = ({ type, placeholder, className }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`px-3 whitespace-nowrap w-full py-2 rounded-md ${
        className || ""
      }`}
    />
  );
};

type TextareaProps = {
  rows: number;
  placeholder: string;
  className: string;
};

const Textarea = ({ rows, placeholder, className }: TextareaProps) => {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      className={`px-3 whitespace-nowrap w-full py-2 rounded-md ${
        className || ""
      }`}
    ></textarea>
  );
};

export { Input, Textarea };
