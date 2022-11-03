import React, { createContext, useContext, useState } from "react";
const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Tesla Model S");

  const getResults = async (baseUrl, type) => {
    setIsloading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_KEY,
      }
    });
    const data = await response.json();
    setResults(data);
    setIsloading(false);
  };
  return (
    <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
