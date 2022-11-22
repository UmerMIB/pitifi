import React, { Children } from "react";
import Header from "../Header";
import Sidebar from "../sidebar";

const BackgroundLayout = () => {
  return (
    <>
      <div className="flex fixed w-full">
        <div>
          <Sidebar />
        </div>
        <Header />
      </div>
    </>
  );
};

export default BackgroundLayout;
