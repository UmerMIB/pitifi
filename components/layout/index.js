import React, { Children } from "react";
import Header from "../Header";
import Sidebar from "../sidebar";

const BackgroundLayout = ({ children }) => {
  return (
    <>
      <div className="flex fixed h-16 w-full">
        <Sidebar />

        <div className="w-full">
          <Header />
          <div className="container mx-auto p-6">{children}</div>
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
