import React from "react";
const IndImg = ({ src, date }) => {
  // console.log(src.split("/public")[1]);
  return (
    <div className="box-border">
      <img
        src={`${src.split("/public")[1]}`}
        className="aspect-auto object-cover rounded-3xl"
        alt={"image" + crypto.randomUUID()}
        loading="lazy"
      />
      <div className="flex justify-between mx-2">
        <p className="text-sm text-neutral-400 font-mono ">
          {date.split("T")[0]}
        </p>
        <p className="text-sm text-neutral-400 font-mono ">
          {date.split("T")[1].split("Z")[0]}
        </p>
      </div>
    </div>
  );
};

export default IndImg;
