import React from "react";
import { Search } from "./Search";
import { Link } from "react-router-dom";
export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div>
      <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b  dark:border-slate-600 border-slate-400">
        <div className="flex justify-between items-center space-x-5 w-screen">
          <Link to="/">
            <p className="whitespace-nowrap text-2xl dark:bg-slate-700 bg-slate-300 font-bold py-2 px-3 rounded-full hover:shadow-lg">
              Search 🔎
            </p>
          </Link>


          <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="whitespace-nowrap font-bold text-xl dark:bg-slate-700 bg-slate-300 py-2 px-3 rounded-full hover:shadow-lg">
            {darkTheme ? "Light 💡" : "Dark 🌒"}
          </button>
        </div>
        <Search />
      </div>
    </div>
  );
};
