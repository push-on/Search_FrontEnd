import React from "react";

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.toLocaleString("default", { month: "short" });
let dd = today.getDate();
const formattedToday = dd + " - " + mm + " - " + yyyy;

export const Footer = () => {
  return (
    <div className="text-center p-10 mt-10 border-t border-slate-400 dark:border-slate-600">
      <a className="decoration-emerald-600 hover:underline underline-offset-4 decoration-2 hover:text-blue-500 dark:hover:text-blue-300 text-lg font-semibold" href="https://github.com/push-on">
        🔗 My (Pushons) Github link
      </a>
      <p className="text-sm text-slate-600 dark:text-slate-400">Todays Date: {formattedToday}</p>
    </div>
  );
};
