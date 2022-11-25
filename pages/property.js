import React from "react";
import BackgroundLayout from "../components/layout";
import Table from "../components/Table";

const properties = () => {
  const DataProperty = {
    mainHeading: "Property Info",
    name: "Logo",
    para: "Add property logo to personalize your property profile.",
    button: "Image",
  };
  const DataLocation = {
    mainHeading: "Location",
    name: "Logo",
    para: "Add property logo to personalize your property profile.",
    button: "Image",
  };

  const Datataxes = {
    mainHeading: "Taxes",
    name: "Logo",
    para: "Add property logo to personalize your property profile.",
    button: "Image",
  };

  return (
    <>
      <BackgroundLayout>
        <div className="mb-8">
          <h2 className="dark:text-white text-4xl font-medium  text-gray-700 text-center ">
            Property
          </h2>
          <p className="dark:text-white mt-8 text-sm text-gray-500 text-center">
            Manage property Information, location & taxes
          </p>
        </div>
        <Table data={DataProperty} />
        <Table data={DataLocation} />
        <Table data={Datataxes} />
      </BackgroundLayout>
    </>
  );
};

export default properties;
