import React, { useState, useEffect } from "react"
import { useDebounce } from "use-debounce"
import { useResultContext } from "../contexts/ResultContextProvider"

export const Search = () => {
  const [text, setText] = useState('Tesla Model S')
  const { setSearchTerm } = useResultContext()
  const [debouncedValue] = useDebounce(text, 500)

  useEffect(() => {
    if (debouncedValue) { setSearchTerm(debouncedValue) }
  }, [debouncedValue])

  return (
    <div className="relative" >
      <input
        value={text}
        type="text"
        className="sm:w-96 w-full h-10 text-lg dark:focus:bg-slate-700 dark:hover:bg-slate-700 dark:bg-slate-800 dark:text-slate-100 text-black bg-slate-300 focus:bg-slate-200 rounded-full shadow-sm outline-none p-6 hover:shadow-lg"
        placeholder="Search or type url"
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button type="button" onClick={() => setText('')} className="h-8 w-8 absolute right-1 inset-y-0 m-2 text-xl dark:hover:bg-slate-700 dark:hover:rounded-full text-slate-500 ">
          ✕
        </button>
      )}
    </div>
  )
}
