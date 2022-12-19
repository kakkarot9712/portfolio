import { useState } from "react";

const useHttp = (resMapper) => {
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const sendReq = async (url) => {
    try {
      setIsLoading(true);
      const resObj = await fetch(url);
      if (!resObj.ok) {
        throw new Error(`${resObj.status} ${resObj.statusText}`);
      }
      const dataObj = await resObj.json();
      setData(resMapper(dataObj));
    } catch (err) {
      setErr(err.message);
    }
    setIsLoading(false);
  };
  return { isLoading, err, sendReq, data };
};

export default useHttp;
