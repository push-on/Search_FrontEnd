import React, { useState } from "react";

export const Pagination = () => {
  const [current, setCurrent] = useState(2);
  return (
    <div>
      <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
        <div className="lg:w-3/5 w-full  flex items-center justify-between ">
          <div className="flex items-center pt-3 text-slate-600 hover:text-blue-300 cursor-pointer">
            <p className="text-sm ml-3 font-medium leading-none " >Previous</p>
          </div>
          <div className="sm:flex hidden">
            <p className="text-sm font-medium leading-none cursor-pointer text-blue-300 border-t border-blue-400 pt-3 mr-4 px-2">1</p>
            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-300 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-2">2</p>
            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-300 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-2">3</p>
            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-300 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-2">4</p>
          </div>
          <div className="flex items-center pt-3 text-slate-600 hover:text-blue-300 cursor-pointer">
            <p className="text-sm font-medium leading-none mr-3" >Next</p>
          </div>
        </div>
      </div>
    </div>
  );
};
