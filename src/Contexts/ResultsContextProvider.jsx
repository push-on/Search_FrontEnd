import React, { createContext, useContext, useState } from 'react'

const ResultContext = createContext()
const baseUrl = 'https://bing-web-search1.p.rapidapi.com'
// const apiKey = '44aed2df67mshad4428dbd67b312p15ff4cjsn2870ce60fc6f'

export const ResultsContextProvider = ({ children }) => {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  // '/search', '/images', '/news', '/videos'
  const getResults = async (type) => {
    setIsLoading(true)
    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '44aed2df67mshad4428dbd67b312p15ff4cjsn2870ce60fc6f',
        'X-RapidAPI-Host': 'bing-web-search1.p.rapidapi.com'
      }
    })
    const data = await response.json()
    setResults(data)
    setIsLoading(false)
  }

  return (
    <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
      {children}
    </ResultContext.Provider>
  )
}
export const useResultContext = () => {
  useContext(ResultContext)
}