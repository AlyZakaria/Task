import { useState, useEffect } from "react";
import axios from "../apis/axios";
import urls from "../apis/url.json";
const url = urls.getProducts;

function useGetProducts(setProducts) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        if (response.status === 200) setLoading(false);
        setProducts(
          response.data.map((p) => {
            return { ...p, checked: false };
          })
        );
      } catch (err) {}
    }
    fetchData();
    // eslint-disable-next-line
  }, []);
  return loading;
}

export default useGetProducts;
