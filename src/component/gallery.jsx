import React, { use, useEffect, useState } from "react";
import IndImg from "./indImg";
import { LOC } from "../util/location";
import axios from "axios";
import Query from "./query";
import useQuery from "../hook/useQuery";

const Gallery = () => {
  const [page, SetPage] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { images, loading, setImages, SetLoading } = useQuery(page, 50);

  return loading === true ? (
    <p className="text-4xl text-white text-center p-10">Loading...</p>
  ) : (
    <>
      <Query setImages={setImages} images={images} />

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 p-2 max-w-[95%] mx-auto">
        {images.metaDataList?.map((item, ind) => {
          return (
            <IndImg src={item.fileLoc} date={item.createdDate} key={ind} />
          );
        })}
      </div>
      {/* <div className="text-gray-400 border-2 border-r-4 border-r-blue-300 border-t-fuchsia-300 border-t-4 rounded-full animate-spin size-10 mx-auto mb-2"></div>
      <div className="text-2xl">_</div> */}
      <div className="flex justify-center gap-10 items-center">
        <p
          className="p-2 px-4 text-2xl bg-fuchsia-300 rounded-lg border border-black"
          onClick={() => SetPage((prev) => prev - 1)}
        >
          Prev
        </p>
        <p className="text-4xl font-black text-amber-100">{page}</p>
        <p
          className="p-2 px-4 text-2xl bg-fuchsia-300 rounded-lg border border-black"
          onClick={() => SetPage((prev) => prev + 1)}
        >
          Next
        </p>
      </div>
    </>
  );
};

export default Gallery;
