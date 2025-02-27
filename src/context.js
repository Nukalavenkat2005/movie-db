import React, { useState, useContext } from "react";
import useFetch from "./useFetch";

export const API_ENDPOINT = "https://www.omdbapi.com/?apikey=61a31098";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const { isLoading, error, data: movies } = useFetch(`&s=${query || "avengers"}`);

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
