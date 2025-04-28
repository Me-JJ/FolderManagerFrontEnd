import axios from "axios";
import React, { useEffect, useState } from "react";
import { LOC, SIZE } from "../util/location.js";
export default function useFilterQuery(page, startDate, endDate, setLoading) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function getImages(fileLoc) {
      const res = await axios.get(
        `http://localhost:8080/getMetaFileWithinDate?fileLoc=${fileLoc}&page=${page}&size=${SIZE}&startDate=${startDate}&endDate=${
          endDate == "undefined" ? 0 : endDate
        }`
      );
      // console.log(res.data);
      setLoading(false);
      setImages(res.data);
    }
    setLoading(true);
    getImages(LOC);
  }, [page]);

  return { images };
}
