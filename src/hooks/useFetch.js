import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const resp = await fetch(url);

        if (!resp.ok) {
          throw new Error(resp.statusText);
        }

        const json = await resp.json();
        setIsLoading(false);

        setData(json);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Aborted");
        } else {
          setError("Could not fetch data");
          setIsLoading(false);
        }
      }
    };

    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, error };
};
