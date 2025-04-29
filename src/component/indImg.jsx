import React from "react";
import { useNavigate } from "react-router";
const IndImg = ({ src, date }) => {
  // console.log(src.split("/public")[1]);
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col gap-2"
      onClick={() => {
        navigate(
          `/image${src.split("/public")[1]}/${date.split("T")[0]}/${
            date.split("T")[1].split("Z")[0]
          }`
        );
      }}
    >
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
