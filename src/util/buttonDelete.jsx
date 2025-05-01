import React from "react";

export default function ButtonDelete({
  extraStyle,
  disabled,
  text,
  handleSubmit,
}) {
  return (
    <p
      className="bg-gradient-to-br from-red-400 via-fuchsia-300 to-orange-400 px-4 p-2 rounded-2xl font-lg font-mono
      hover:bg-gradient-to-br hover:from-red-500 hover:via-fuchsia-400 hover:to-orange-500 transition-all duration-200 active:scale-95
      md:w-fit min-w-fit w-full max-w-[30%] text-center hover:shadow-lg hover:shadow-red-400/50"
      onClick={handleSubmit}
    >
      {text}
    </p>
  );
}
