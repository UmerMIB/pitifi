import React, { Children } from "react";
import Header from "../Header";
import Sidebar from "../sidebar";

const BackgroundLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex w-full">
          <div>
            <Sidebar />
          </div>
          <main className="w-full mx-auto p-6">{children}</main>
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
