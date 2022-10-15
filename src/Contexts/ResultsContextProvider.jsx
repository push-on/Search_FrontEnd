import React, { createContext, useContext, useState } from 'react'

const ResultContext = createContext()
const baseUrl = 'https://bing-web-search1.p.rapidapi.com/search'
const apiKey = '44aed2df67mshad4428dbd67b312p15ff4cjsn2870ce60fc6f'

export const ResultsContextProvider = ({ children }) => {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  // '/search', '/images', '/news', '/videos'
  const getResults = async (type) => {
    setIsLoading(true)
    const response = await fetch('$baseUrl')
  }
  
  return (
    <div>ResultsContextProvider</div>
  )
}
