import React from 'react'

const today = new Date()
const yyyy = today.getFullYear()
let mm = today.toLocaleString('default', { month: 'short' })
let dd = today.getDate()
const formattedToday = dd + ' - ' + mm + ' - ' + yyyy;

export const Footer = () => {
  return (
    <div className="text-center p-10 mt-10 border-t border-slate-400 dark:border-slate-600">
      Imran Hossain {formattedToday}, Inc.
    </div>
  )
}
