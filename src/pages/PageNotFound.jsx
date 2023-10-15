import React from "react";

const PageNotFound = () => {
  return (
    <div className="w-full h-full text-red-600">
      <div className="h-[100vh] flex justify-center items-center flex-col">
        <h2 className="text-2xl">Page not found !</h2>
        <h2 className="text-2xl">404</h2>
      </div>
    </div>
  );
};

export default PageNotFound;
