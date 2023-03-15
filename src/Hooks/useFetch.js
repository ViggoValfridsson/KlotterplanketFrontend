import { useState, useEffect } from "react";

const useFetch = (url, dependency) => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch that resource, please try again.");
        }
        return response.json();
      })
      .then((data) => {
        setError(null);
        setData(data);
        setIsPending(false);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url, dependency]);

  return { isPending, error, data };
};

export default useFetch;
