import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Path } from "./components/Path";
import { Pagination } from "./components/Pagination";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-slate-100 dark:bg-slate-800 dark:text-slate-100 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Path />
        <Pagination />
        <Footer />
      </div>
    </div>
  );
}