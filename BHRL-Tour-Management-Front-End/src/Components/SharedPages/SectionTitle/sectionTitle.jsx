import React from "react";

const sectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center my-10 md:my-16">
      {subtitle && (
        <p className="text-sm md:text-base text-amber-500 font-semibold uppercase tracking-widest mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
        {title}
      </h2>

      <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-amber-500 to-pink-500"></div>
    </div>
  );
};

export default sectionTitle;
