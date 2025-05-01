import axios from "axios";
import React, { useEffect, useState } from "react";
import { LOC, SIZE } from "../util/location.js";
import { useNavigate } from "react-router";
export default function useQuery(page, setLoading, setErr) {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (page === undefined) {
      return navigate("/0");
    }
    async function getImages(fileLoc) {
      try {
        const res = await axios.get(
          `http://localhost:8080/getMetaFile?fileLoc=${fileLoc}&page=${page}&size=${SIZE}`
        );
        // console.log(res.data.err);
        setLoading(false);
        setImages(res.data.data);
      } catch (err) {
        setLoading(false);
        setErr(err);
      }
    }
    setLoading(true);
    getImages(LOC);
  }, [page]);

  return { images };
}
