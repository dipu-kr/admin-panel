import React from "react";

const StateBox = ({ title, subtitle, progress, icon, increase }) => {
  return (
    <div className="h-[90px] flex justify-between bg-[#1a2233] text-[#16a37f] p-5">
      <div className="flex flex-col gap-1 justify-center">
        <span className="text-[22px]">{icon}</span>
        <span className="text-white text-[14px]">{title}</span>
        <span className="text-[13px]">{subtitle}</span>
      </div>
      <div className="flex flex-col gap-1">
        <span>{progress}</span>
        <span className="text-[13px]">{increase}</span>
      </div>
    </div>
  );
};

export default StateBox;
