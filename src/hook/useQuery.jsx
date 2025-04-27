import axios from "axios";
import React, { useEffect, useState } from "react";
import { LOC } from "../util/location";

export default function useQuery(page, size, ...props) {
  const [images, setImages] = useState([]);
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    async function getImages(fileLoc) {
      const res = await axios.get(
        `http://localhost:8080/getMetaFile?fileLoc=${fileLoc}&page=${page}&size=${size}`
      );
      // console.log(res.data);
      SetLoading(false);
      setImages(res.data);
    }
    SetLoading(true);
    getImages(LOC);
  }, [page]);

  return { images, loading, setImages, SetLoading };
}
