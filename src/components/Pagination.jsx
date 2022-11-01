import React from "react";
import { useResultContext } from "../contexts/ResultContextProvider";

export const Pagination = () => {
  const { isLoading } = useResultContext();
  return (
    <div className={isLoading ? "hidden" : ""}>
      <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
        <div className="flex">
          <p className="text-sm cursor-pointer text-blue-300 border-t border-blue-400 pt-3 mr-4 px-2">1</p>
          <p className="text-sm cursor-pointer text-gray-600 hover:text-blue-300 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-2">2</p>
          <p className="text-sm cursor-pointer text-gray-600 hover:text-blue-300 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-2">3</p>
          <p className="text-sm cursor-pointer text-gray-600 hover:text-blue-300 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-2">4</p>
        </div>
      </div>
    </div>
  );
};
