import axios from "axios";
import React, { useEffect, useState } from "react";
import { LOC, SIZE } from "../util/location.js";
import { useNavigate } from "react-router";
export default function useFilterQuery(
  page,
  startDate,
  endDate,
  setLoading,
  setErr
) {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getImages(fileLoc) {
      if (startDate === "undefined") {
        return navigate("/0");
      }
      try {
        const res = await axios.get(
          `http://localhost:8080/getMetaFileWithinDate?fileLoc=${fileLoc}&page=${page}&size=${SIZE}&startDate=${startDate}&endDate=${
            endDate == "undefined" ? 0 : endDate
          }`
        );
        // console.log(res.data.data);

        setImages(res.data.data);
      } catch (err) {
        setErr(err);
      } finally {
        setLoading(false);
      }
    }
    setLoading(true);
    getImages(LOC);
  }, [page, startDate, endDate]);

  return { images };
}
