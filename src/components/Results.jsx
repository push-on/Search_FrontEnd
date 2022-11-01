import React, { useEffect, useInsertionEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../contexts/ResultContextProvider";
import { Loading } from "./Loading";
import { Link } from "react-router-dom";

export const Results = () => {
  const { getResults, results, searchTerm, setSearchTerm, isLoading } = useResultContext();
  const location = useLocation();

  let baseUrl = "";
  switch (location.pathname) {
    case "/search":
      baseUrl = "https://bing-web-search1.p.rapidapi.com";
      break;
    case "/images":
      baseUrl = "https://bing-image-search1.p.rapidapi.com/images";
      break;
    case "/news":
      baseUrl = "https://bing-news-search1.p.rapidapi.com/news";
      break;
    case "/videos":
      baseUrl = "https://bing-video-search1.p.rapidapi.com/videos";
      break;
    default:
      baseUrl = "https://bing-web-search1.p.rapidapi.com";
  }

  useEffect(() => {
    getResults(baseUrl, `/search?q=${searchTerm}`);
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;
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
        <div className="flex flex-wrap items-center ">
          {results.value?.map(({ name, thumbnailUrl, contentUrl }, index) => (
            <a className="sm:p-3 p-5 hover:drop-shadow-xl transition duration-300 ease-in-out" key={index} href={contentUrl} target="_blank" rel="noreferrer">
              <img className="hover:border-2 dark:border-slate-300 border-slate-700 object-contain h-96 w-96 rounded-lg bg-slate-200 dark:bg-slate-900 " src={thumbnailUrl} alt={name} />
              <p className="w-96 text-sm pt-2  hover:underline underline-offset-4">
                {name.length > 55 ? name.substring(0, 55) : name}
              </p>
            </a>
          ))}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-col items-center">
          {results?.value?.map(({ name, url, description, image }, index) => (
            <div key={index} className="flex max-w-2xl pb-1">
              <div className="container  w-32 pt-2">
                <img className=" object-fill object-center rounded-md bg-slate-200 dark:bg-slate-900" src={image?.thumbnail?.contentUrl} alt=""/>
              </div>
              <div className="container">
                <a href={url} target="_blank" rel="noreferrer" >
                  <p className="font-semibold text-lg hover:underline underline-offset-4 dark:text-blue-300 text-blue-600">
                    {name}
                  </p>
                </a>
                <p className="text-sm italic">
                  {url.length > 30 ? url.substring(0, 30) : url}
                </p>
                <p className="text-justify cursor-text	text-sm text-slate-600 dark:text-slate-400">{description}</p>
              </div>
            </div>
          ))}
        </div>
      );
    case "/videos":
      return (
        <div className="flex flex-wrap items-center ">
          {results.value?.map(({ name, thumbnailUrl, contentUrl }, index) => (
            <a className="sm:p-3 p-5 hover:drop-shadow-xl transition duration-300 ease-in-out" key={index} href={contentUrl} target="_blank" rel="noreferrer">
              <img className="hover:border-2 dark:border-slate-300 border-slate-700 object-contain h-96 w-96 rounded-lg bg-slate-200 dark:bg-slate-900 " src={thumbnailUrl} alt={name} />
              <p className="w-96 text-sm pt-2  hover:underline underline-offset-4">
                {name.length > 55 ? name.substring(0, 55) : name}
              </p>

            </a>
          ))}
        </div>
      );
    default:
      return "Error";
  }
};
