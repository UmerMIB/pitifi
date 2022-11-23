import React from "react";
import BackgroundLayout from "../components/layout";
import Table from "../components/Table";

const properties = () => {
  return (
    <>
      <BackgroundLayout>
        <h2 className=" text-4xl font-medium  text-gray-700 text-center ">
          Property
        </h2>
        <p className="mt-8 text-sm text-gray-500 text-center">
          Manage property Information, location & taxes
        </p>
        <div className="mt-8">
          <Table />
        </div>
      </BackgroundLayout>
    </>
  );
};

export default properties;
