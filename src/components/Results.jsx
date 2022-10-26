import { useLocation } from 'react-router-dom'
import { useResultContext } from '../Contexts/ResultsContextProvider'
import { Loading } from './Loading'
export const Results = () => {
  const { results, getResults, isLoading, searchTerm } = useResultContext
  if (isLoading) return <Loading />

  
  const location = useLocation()
  switch (location.pathname) {
    // '/search', '/images', '/news', '/videos'
    case '/search':
      return 'SEARCH'
    case '/images':
      return 'Images'
    case '/news':
      return 'News'
    case '/videos':
      return 'Videos'
    default:
      return 'ERROR!'
  }
}
