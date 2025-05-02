import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import Query from "./query";
import useFilterQuery from "../hook/useFilteredQuery";
import { SIZE } from "../util/location";
import IndImg from "./indImg";
import Error from "./error";

export default function GalleryFiltered() {
  const { page, startDate, endDate } = useParams();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  // console.log(page, startDate, endDate);

  const { images } = useFilterQuery(
    page,
    startDate,
    endDate,
    setLoading,
    setErr
  );
  // console.log(Number(page) >= Math.ceil(images.size / SIZE) - 1);
  // console.log(images, err);

  return loading === true ? (
    <p className="text-4xl text-white text-center p-10">Loading...</p>
  ) : err == null ? (
    <>
      <Query size={images.size} />

      <div className="text-neutral-300 text-sm md:text-lg text-center my-2 mb-4 flex justify-center items-center ">
        <span className="bg-orange-300 rounded-lg px-2 p-1 text-neutral-600">
          {new Date(Number(startDate)).toUTCString()}
        </span>
        {"-------------------"}
        <span className="bg-indigo-300 rounded-lg px-2 p-1 text-neutral-600">
          {endDate === "undefined"
            ? new Date().toUTCString()
            : new Date(Number(endDate)).toUTCString()}
        </span>
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 p-2 max-w-[95%] mx-auto mb-10">
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
            onClick={() =>
              navigate(`/${startDate}/${endDate}/${Number(page) - 1}`)
            }
          >
            Prev
          </div>
        )}
        <p className="text-4xl font-black text-amber-100">{page}</p>

        {Number(page) >= Math.floor(images.size / SIZE) - 1 ? (
          <div className="p-2 px-4 text-sm md:text-lg border border-neutral-200 rounded-2xl text-neutral-300 hover:bg-neutral-200 hover:text-black transition-all duration-100 ease-in font-mono hover:cursor-not-allowed">
            Next
          </div>
        ) : (
          <div
            className="p-2 px-4 text-sm md:text-lg border border-fuchsia-200 rounded-2xl text-neutral-300 hover:bg-fuchsia-200 hover:text-black transition-all duration-100 ease-in font-mono"
            onClick={() =>
              navigate(`/${startDate}/${endDate}/${Number(page) + 1}`)
            }
          >
            Next
          </div>
        )}
      </div>
    </>
  ) : (
    <Error err={err} />
  );
}
