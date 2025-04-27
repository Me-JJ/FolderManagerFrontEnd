import React from "react";

export default function Button({ extraStyle, disabled, text }) {
  return (
    <p
      className="bg-gradient-to-br from-amber-100 via-teal-300 to-blue-200 px-4 p-2 rounded-lg font-lg font-mono
    hover:bg-gradient-to-br hover:from-amber-300 hover:via-teal-300 hover:to-blue-300 transition-all duration-200 active:scale-95
    md:w-fit min-w-fit w-full max-w-[30%] text-center hover:shadow-lg hover:shadow-blue-400/50"
    >
      {text}
    </p>
  );
}
