import React from "react";
import BackgroundLayout from "../components/layout";
import Table from "../components/Table";

const properties = () => {
  const DataProperty = {
    mainHeading: "Property Info",
    logo: "propertyLogo",
    desc: "Add property logo to personalize your property profile.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    dataRow: [
      {
        title: "Type",
        value: "Hotel",
        button: "Update",
      },
      {
        title: "Name",
        value: "HotelAgra",
        button: "Update",
      },
      {
        title: "Romes",
        value: "25",
        button: "Update",
      },
    ],
  };
  const DataLocation = {
    mainHeading: "Location",
    logo: "locationLogo",
    desc: "Add property logo to personalize your property profile.",
    text: "XYZ",
    dataRow: [
      {
        title: "Type",
        value: "Hotel",
        button: "Update",
      },
      {
        title: "Name",
        value: "HotelAgra",
        button: "Update",
      },
      {
        title: "Romes",
        value: "25",
        button: "Update",
      },
    ],
  };

  const Datataxes = {
    mainHeading: "Taxes",
    logo: "taxesLogo",
    desc: "Add property logo to personalize your property profile.",
    text: "XYZ",
    dataRow: [
      {
        title: "Type",
        value: "Hotel",
        button: "Update",
      },
      {
        title: "Name",
        value: "HotelAgra",
        button: "Update",
      },
      {
        title: "Romes",
        value: "25",
        button: "Update",
      },
    ],
  };

  return (
    <>
      <BackgroundLayout>
        <div className="mb-8">
          <h2 className=" text-4xl font-medium  text-gray-700 text-center ">
            Property
          </h2>
          <p className=" mt-8 text-sm text-gray-500 text-center">
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
