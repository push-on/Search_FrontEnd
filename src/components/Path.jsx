import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Results } from './Results'
export const Path = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route path='/' element={<Navigate to="/search" />} />
        {['/search', '/images', '/news', '/videos']?.map((item) => {
          return <Route path={item} element={<Results />} />
        })}

      </Routes>
    </div>
  )
}


