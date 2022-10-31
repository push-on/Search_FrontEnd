import React, { useEffect, useInsertionEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../contexts/ResultContextProvider";
import { Loading } from "./Loading";

export const Results = () => {
  const { getResults, results, searchTerm, setSearchTerm, isLoading } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults("/search?q=cats");
  }, []);

  if (isLoading) return <Loading />;
  console.log(results);
  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-col items-center">
          {results.webPages?.value?.map(({ name, url, snippet }, index) => (
            <div key={index} className="max-w-2xl pb-1">
              <a href={url} target="_blank" rel="noreferrer" >
                <p className="font-semibold text-lg hover:underline underline-offset-4 dark:text-blue-300 text-blue-600">
                  {name}
                </p>
              </a>
              <p className="text-sm italic">
                {url.length > 30 ? url.substring(0, 30) : url}
              </p>
              <p className="text-justify cursor-text	text-sm text-slate-600 dark:text-slate-400">{snippet}</p>
            </div>
          ))}
        </div>
      );
    case "/images":
      return (
        "/images"
      );
    case "/news":
      return (
        "/news"
      );
    case "/videos":
      return (
        "/videos"
      );
    default:
      return "Error";
  }
};
