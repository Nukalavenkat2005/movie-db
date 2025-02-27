import { useState, useEffect } from "react";
import { API_ENDPOINT } from "./context";

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_ENDPOINT}${urlParams}`);
        const result = await response.json();

        console.log("API Response:", result); // Debugging

        if (result.Response === "True") {
          setData(result.Search || result);
          setError({ show: false, msg: "" });
        } else {
          setError({ show: true, msg: result.Error });
          setData(null);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        setError({ show: true, msg: "Something went wrong!" });
      }
      setIsLoading(false);
    };

    fetchMovies();
  }, [urlParams]);

  return { isLoading, error, data };
};

export default useFetch;
