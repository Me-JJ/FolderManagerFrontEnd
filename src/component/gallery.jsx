import React, { useState } from "react";
import IndImg from "./indImg";
import Query from "./query";
import useQuery from "../hook/useQuery";
import { Link, useNavigate, useParams } from "react-router";
import { SIZE } from "../util/location";
import Error from "../component/error";
const Gallery = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const { images } = useQuery(page, setLoading, setErr);

  // console.log(Number(page), Math.ceil(images.size / SIZE));

  return loading === true ? (
    <p className="text-4xl text-white text-center p-10">Loading...</p>
  ) : err == null ? (
    <>
      <Query size={images.size} />

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 p-2 max-w-[95%] mx-auto">
        {images.metaDataList?.map((item, ind) => {
          return (
            <IndImg src={item.fileLoc} date={item.createdDate} key={ind} />
          );
        })}
      </div>
      <div className="flex justify-center gap-10 items-center py-10">
        {page === "0" ? (
          <div className="p-2 px-4 text-sm md:text-lg border border-neutral-200 rounded-2xl text-neutral-300 hover:bg-neutral-200 hover:text-black transition-all duration-100 ease-in font-mono hover:cursor-not-allowed">
            Prev
          </div>
        ) : (
          <div
            className="p-2 px-4 text-sm md:text-lg border border-fuchsia-200 rounded-2xl text-neutral-300 hover:bg-fuchsia-200 hover:text-black transition-all duration-100 ease-in font-mono"
            onClick={() => navigate(`/${Number(page) - 1}`)}
          >
            Prev
          </div>
        )}
        <p className="text-lg md:text-2xl text-amber-100 font-mono">{page}</p>

        {Number(page) >= Math.floor(images.size / SIZE) ? (
          <div className="p-2 px-4 text-sm md:text-lg border border-neutral-200 rounded-2xl text-neutral-300 hover:bg-neutral-200 hover:text-black transition-all duration-100 ease-in font-mono hover:cursor-not-allowed">
            Next
          </div>
        ) : (
          <div
            className="p-2 px-4 text-sm md:text-lg border border-fuchsia-200 rounded-2xl text-neutral-300 hover:bg-fuchsia-200 hover:text-black transition-all duration-100 ease-in font-mono"
            onClick={() => navigate(`/${Number(page) + 1}`)}
          >
            Next
          </div>
        )}
      </div>
    </>
  ) : (
    <Error err={err} />
  );
};

export default Gallery;
