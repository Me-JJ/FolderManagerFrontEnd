import React from "react";
import IndImg from "./indImg";
import Query from "./query";
import useQuery from "../hook/useQuery";
import { Link, useNavigate, useParams } from "react-router";
import { SIZE } from "../util/location";

const Gallery = () => {
  const { page } = useParams();
  const navigate = useNavigate();

  const { images, loading } = useQuery(page);

  console.log(Number(page), Math.ceil(images.size / SIZE));

  return loading === true ? (
    <p className="text-4xl text-white text-center p-10">Loading...</p>
  ) : (
    <>
      <Query images={images} size={images.size} />

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
            onClick={() => navigate(`/${Number(page) - 1}`)}
          >
            Prev
          </div>
        )}
        <p className="text-4xl font-black text-amber-100">{page}</p>

        {Number(page) >= Math.ceil(images.size / SIZE) ? (
          <div className="p-2 px-4 text-2xl rounded-lg border border-black bg-gray-300 hover:cursor-not-allowed">
            Next
          </div>
        ) : (
          <div
            className="p-2 px-4 text-2xl bg-fuchsia-300 rounded-lg border border-black"
            onClick={() => navigate(`/${Number(page) + 1}`)}
          >
            Next
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
