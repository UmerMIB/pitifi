import React from "react";
import BackgroundLayout from "../components/layout";
import BriefCard from "../components/Card/BriefCard";

const properties = () => {
  const Data = [
    {
      hotelName: "Jane Cooper",
      phoneNo: "+1-202-555-0170",
      email: "janecooper@example.com",
      website: "www.janecooper.com",
      postalAddress: "Regional Paradigm Technician",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      hotelName: "Jane Cooper",
      phoneNo: "+1-202-555-0170",
      email: "janecooper@example.com",
      website: "www.janecooper.com",
      postalAddress: "Regional Paradigm Technician",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ];

  return (
    <>
      <BackgroundLayout>
        <div className="mb-8">
          <h2 className=" text-4xl font-medium dark:text-white  text-gray-700 text-center ">
            Manage Property
          </h2>
          <p className="mt-8 text-sm dark:text-white text-gray-500 text-center">
            Add or remove properties you manage or own here
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-col-2 sm:grid-cols-1 lg:grid-cols-2 w-[48rem] mx-auto">
          {Data.map((data, i) => {
            return <BriefCard key={i} {...data} />;
          })}
        </div>
      </BackgroundLayout>
    </>
  );
};

export default properties;
