import React from "react";
import { Oval } from "react-loader-spinner";
export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Oval
        height={50}
        width={50}
        color="#f1f5f9"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#475569"
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </div>
  );
};
