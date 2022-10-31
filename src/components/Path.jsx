import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Results } from "./Results";
export const Path = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/videos" element={<Results />} />
        <Route path="/news" element={<Results />} />
      </Routes>
    </div>
  );
};



