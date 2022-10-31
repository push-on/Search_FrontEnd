import React, { createContext, useContext, useState } from "react";
const ResultContext = createContext();
const baseUrl = "https://bing-web-search1.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsloading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "44aed2df67mshad4428dbd67b312p15ff4cjsn2870ce60fc6f",
        "X-RapidAPI-Host": "bing-web-search1.p.rapidapi.com"
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
