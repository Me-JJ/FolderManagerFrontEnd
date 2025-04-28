import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import Query from "./query";
import useFilterQuery from "../hook/useFilteredQuery";
import { SIZE } from "../util/location";
import IndImg from "./indImg";

export default function GalleryFiltered() {
  const { page, startDate, endDate } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // console.log(page, startDate, endDate);

  if (startDate === "undefined") {
    console.log("NAVIGATE TO /");
    return <Navigate to={"/0"} />;
  }
  const { images } = useFilterQuery(page, startDate, endDate, setLoading);
  // console.log(Number(page) >= Math.ceil(images.size / SIZE) - 1);

  return loading === true ? (
    <p className="text-4xl text-white text-center p-10">Loading...</p>
  ) : (
    <>
      <Query size={images.size} />

      <p className="text-neutral-300 text-sm md:text-lg text-center my-2 ">
        Images Created Between {"\t"}
        <span className="bg-orange-300 rounded-lg px-2 p-1 text-neutral-600">
          {new Date(Number(startDate)).toUTCString()}
        </span>
        {" and "}
        <span className="bg-indigo-300 rounded-lg px-2 p-1 text-neutral-600">
          {new Date(Number(endDate)).toUTCString()}
        </span>
      </p>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 p-2 max-w-[95%] mx-auto">
        {images.metaDataList?.map((item, ind) => {
          return (
            <IndImg src={item.fileLoc} date={item.createdDate} key={ind} />
          );
        })}
      </div>
      <div className="flex justify-center gap-10 items-center">
        {page === "0" ? (
          <div className="p-2 px-4 text-2xl rounded-lg border border-black bg-gray-300 hover:cursor-not-allowed">
            Prev
          </div>
        ) : (
          <div
            className="p-2 px-4 text-2xl bg-fuchsia-300 rounded-lg border border-black "
            onClick={() =>
              navigate(`/${startDate}/${endDate}/${Number(page) - 1}`)
            }
          >
            Prev
          </div>
        )}
        <p className="text-4xl font-black text-amber-100">{page}</p>

        {Number(page) >= Math.ceil(images.size / SIZE) - 1 ? (
          <div className="p-2 px-4 text-2xl rounded-lg border border-black bg-gray-300 hover:cursor-not-allowed">
            Next
          </div>
        ) : (
          <div
            className="p-2 px-4 text-2xl bg-fuchsia-300 rounded-lg border border-black"
            onClick={() =>
              navigate(`/${startDate}/${endDate}/${Number(page) + 1}`)
            }
          >
            Next
          </div>
        )}
      </div>
    </>
  );
}
