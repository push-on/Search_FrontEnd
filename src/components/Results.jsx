import React, { useEffect, useInsertionEffect } from "react"
import { useLocation } from "react-router-dom"

import { useResultContext } from "../contexts/ResultContextProvider"
import { Loading } from "./Loading"

export const Results = () => {
  const { getResults, results, searchTerm, isLoading } = useResultContext()
  const location = useLocation()

  let baseUrl = ""
  switch (location.pathname) {
    case "/search":
      baseUrl = "https://bing-web-search1.p.rapidapi.com"
      break
    case "/images":
      baseUrl = "https://bing-image-search1.p.rapidapi.com/images"
      break
    case "/news":
      baseUrl = "https://bing-news-search1.p.rapidapi.com/news"
      break
    case "/videos":
      baseUrl = "https://bing-video-search1.p.rapidapi.com/videos"
      break
    default:
      baseUrl = "https://bing-web-search1.p.rapidapi.com"
  }
  useEffect(() => {
    getResults(baseUrl, `/search?q=${searchTerm}`)
  }, [searchTerm, location.pathname])

  if (isLoading) { return <Loading /> }

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex justify-center">
          <div className="flex flex-col sm:w-[650px]">
            {results?.webPages?.value?.map(({ name, url, snippet }, index) => (
              <div key={index} className=" w-2xl p-3 rounded-lg transition ease-in-out dark:hover:bg-slate-800 hover:bg-slate-200">
                <a href={url} target="_blank" rel="noreferrer" >
                  <p className="font-semibold text-lg hover:underline underline-offset-4 dark:text-blue-300 text-blue-600">
                    {name}
                  </p>
                </a>
                <p className="text-sm italic">
                  {url?.length > 30 ? url?.substring(0, 30) : url}
                </p>
                <p className="text-justify cursor-text text-sm text-slate-600 dark:text-slate-400">{snippet}</p>
              </div>
            ))}
          </div>
        </div>
      )
    case "/images":
      return (
        <div className="flex flex-wrap justify-center">
          {results?.value?.map(({ name, thumbnailUrl, contentUrl }, index) => (
            <a className="w-64 h-fit m-2 overflow-hidden rounded-md shadow-md hover:shadow-lg" key={index} href={contentUrl} target="_blank" rel="noreferrer">
              <img className="h-52" src={thumbnailUrl} alt={name} />
              <p className="m-2 text-xs hover:underline font-semibold">
                {name?.length > 55 ? name?.substring(0, 55) : name}
              </p>
            </a>
          ))}
        </div>
      )
    case "/news":
      return (
        <div className="flex justify-center ">

          <div className="flex flex-col sm:w-[650px]">
            {results?.value?.map(({ name, url, description, image }, index) => (
              <div key={index} className="flex w-2xl p-3 rounded-lg transition ease-in-out dark:hover:bg-slate-800 hover:bg-slate-200">
                <div className="container  w-32 pt-2">
                  <img className=" object-fill object-center rounded-md bg-slate-200 dark:bg-slate-900" src={image?.thumbnail?.contentUrl} alt="" />
                </div>
                <div className="container">
                  <a href={url} target="_blank" rel="noreferrer" >
                    <p className="font-semibold text-lg hover:underline underline-offset-4 dark:text-blue-300 text-blue-600">
                      {name}
                    </p>
                  </a>
                  <p className="text-sm italic">
                    {url?.length > 50 ? url?.substring(0, 50) : url}
                  </p>
                  <p className="text-justify cursor-text	text-sm text-slate-600 dark:text-slate-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    case "/videos":
      return (
        <div className="flex flex-wrap justify-center">
          {results?.value?.map(({ name, thumbnailUrl, contentUrl }, index) => (
            <a className="w-64 h-fit m-2 overflow-hidden rounded-md shadow-md hover:shadow-lg" key={index} href={contentUrl} target="_blank" rel="noreferrer">
              <img className="h-52" src={thumbnailUrl} alt={name} />
              <p className="m-2 text-xs hover:underline font-semibold">
                {name?.length > 55 ? name?.substring(0, 55) : name}
              </p>
            </a>
          ))}
        </div>
      )
    default:
      return "Error"
  }
}
