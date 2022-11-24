import React, { Children } from "react";
import Header from "../Header";
import Sidebar from "../sidebar";

const BackgroundLayout = ({ children }) => {
  return (
    <>
      <div className=" flex h-16 w-full">
        <Sidebar />
        <div className="flex flex-col w-full">
          <div>
            <Header />
          </div>
          <div className=" w-full mx-auto p-6">{children}</div>
        </div>
      </div>
    </>
  );
};

export default BackgroundLayout;
/**
 * <BackgriundLayout>
 * <p> my name is danyal</p>
 * </BackgroundLayout>
 */
