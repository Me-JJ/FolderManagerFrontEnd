import React from "react";

export default function Error({ err }) {
  // console.log(err);
  return (
    <div className="flex flex-col gap-10 text-white">
      <p>{err.status}</p>
      <p>{err.message}</p>
      <p>{err.subErrors}</p>
    </div>
  );
}
