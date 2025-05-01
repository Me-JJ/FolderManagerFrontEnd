import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import Button from "../util/button";
import ButtonDelete from "../util/buttonDelete";

import { LOC } from "../util/location";
import axios from "axios";
import Swal from "sweetalert2";
export default function SingleImage() {
  const { path, date, time } = useParams();

  const [msg, setMsg] = useState({
    success: null,
    error: null,
    loading: false,
  });
  const navigate = useNavigate();

  async function handleDelete() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.get(
          `http://localhost:8080/delete?fileLoc=${LOC + "/" + path}`
        );

        console.log("RESPONSE->", res.data);

        if (res.data) {
          console.log("Deleted");
          setMsg({
            ...msg,
            success: "FILE DELETED SUCCESSFULLY",
            loading: true,
          });
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });

          await new Promise((resolve) => {
            setTimeout(resolve, 2000);
          });

          navigate(-1);
        } else {
          console.log("Failed");
          setMsg({ ...msg, error: "SOMETHING WENT WRONG" });
        }
      }
    });
  }
  // console.log(path);
  return (
    <div className="h-[100vh] inset flex justify-center items-center pt-5">
      <div className="flex flex-col gap-5">
        {msg.error && (
          <p className="text-red-400 font-bold text-left font-mono md:text-lg text-sm ">
            {msg.error}
          </p>
        )}
        {msg.success && (
          <p className="text-green-600 font-bold text-right font-mono md:text-lg text-sm">
            {msg.success}
          </p>
        )}
        <div className="flex justify-around gap-10">
          <ButtonDelete text={"Delete"} handleSubmit={handleDelete} />
          <a href={`${LOC + "/" + path}`} download={path + crypto.randomUUID()}>
            <Button text={"Download"} />
          </a>
        </div>
        <div className="flex justify-between text-neutral-300">
          <p>{date}</p>
          <p>{time}</p>
        </div>
        {msg.loading ? (
          <p className="h-[500px] text-center text-2xl text-neutral-400 animate-pulse">
            Loading...
          </p>
        ) : (
          <img
            className="object-contain h-[500px] rounded-3xl"
            src={"/" + path}
            alt={path + crypto.randomUUID}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}
