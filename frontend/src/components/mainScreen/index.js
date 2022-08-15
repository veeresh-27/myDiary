import React from "react";

const MainScreen = ({ title, children }) => {
  return (
    <div className="px-3 py-5 md:px-5 lg:px-14 xl:px-20 flex flex-col w-full gap-3 min-h-screen">
      <div className="text-6xl font-light">{title}</div>
      <hr className="h-0.5 bg-gray-200 mb-3" />
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
};

export default MainScreen;
