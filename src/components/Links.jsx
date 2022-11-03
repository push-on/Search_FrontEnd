import React from 'react';
import { NavLink } from "react-router-dom";

const links = [
  { url: '/search', text: '🔎 All' },
  { url: '/images', text: '🖼️ Images' },
  { url: '/videos', text: '🎞️ Videos' },
  { url: '/news', text: '📰 News' },
];

export const Links = () => {

  return (
    <div className="flex sm:justify-around justify-between items-center mt-4 ">
      {links.map(({ url, text }) => (
        <NavLink to={url} key={url} className={({ isActive }) => isActive ? "text-blue-600 border-b-4 dark:text-blue-300 border-blue-500 p-2" : "p-2 hover:text-blue-600 hover:dark:text-blue-300"}>
          {text}
        </NavLink>
      ))}
    </div>
  );
};
