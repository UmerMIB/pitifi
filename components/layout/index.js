import React from "react";
import Header from "../Header";
import Sidebar from "../sidebar";

const BackgroundLayout = () => {
  return (
    <div className="flex h-full w-full z-50">
      <Header />
      <div className="flex-1">
        <Sidebar />
      </div>
    </div>
  );
};

export default BackgroundLayout;
