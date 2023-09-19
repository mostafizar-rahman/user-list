import React from "react";

const Title = ({ title }) => {
  return (
    <h1 className="text-2xl font-semibold flex items-center mb-7 shadow-main py-4 px-5 rounded-md ">
      <span className="bg-primary w-5 h-1 block mr-2"></span>
      {title}
      <span className="bg-primary w-5 h-1 block ml-2"></span>
    </h1>
  );
};

export default Title;
