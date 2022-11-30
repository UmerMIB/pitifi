import React from "react";
import BackgroundLayout from "../components/layout";
import Table from "../components/Table";
import HorizontalCard from "../components/Card/HorizontalCard";

const security = () => {
  const LoginSecurity = {
    mainHeading: "Login Security",
    logo: "Logo",
    desc: "Verify User are allowed",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    dataRow: [
      {
        title: "Use Your phone Sign in",
        value: "On",
        button: "Update",
      },
      {
        title: "Password",
        value: "*********",
        button: "Update",
      },
    ],
  };

  const LoginHistoryData = [
    {
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "John's imac",
      desc: "Last Login on Nov 25 2022",
      address: "Sydney, Australia",
      loginAccess: "Revoke",
    },
    {
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Amelia's ipad",
      desc: "Last Login on Oct 11 2022",
      address: "Sydney, Australia",
      loginIp: "104.122.165.14",
    },
  ];

  return (
    <>
      <BackgroundLayout>
        <Table data={LoginSecurity} />
        <div className="my-12 border rounded-lg md:w-full lg:w-9/12 sm:w-full mx-auto">
          <div className="mt-5 px-6">
            <h3 className="text-2xl  font-medium leading-6 text-gray-900">
              Login History
            </h3>
            <div className="mt-3 flex  justify-between items-center">
              <p className=" max-w-2xl text-sm  text-gray-500">
                View all the devices you previously used to login
              </p>
            </div>
          </div>

          <div className="px-6 py-4 sm:grid  sm:gap-4 sm:py-5">
            {LoginHistoryData.map((currElem, i) => {
              return <HorizontalCard key={i} data={currElem} />;
            })}
          </div>
        </div>
      </BackgroundLayout>
    </>
  );
};

export default security;
