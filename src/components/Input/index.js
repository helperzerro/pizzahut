import React from "react";

export default function Input(props) {
  return (
    <input
      className="border border-gray-500 w-full h-12 rounded-md outline-none px-4"
      {...props}
    />
  );
}
