import axios from "axios";
import React, { useEffect, useState } from "react";
import { LOC, SIZE } from "../util/location.js";
import { useNavigate } from "react-router";
export default function useQuery(page, setLoading) {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (page === undefined) {
      return navigate("/0");
    }
    async function getImages(fileLoc) {
      const res = await axios.get(
        `http://localhost:8080/getMetaFile?fileLoc=${fileLoc}&page=${page}&size=${SIZE}`
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
