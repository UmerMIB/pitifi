import Header from "../components/Header";
import NotificationPage from "../components/NotificationPage";
import React, { useState } from "react";

export default function Resetconfirm() {
  const [notify, setNotify] = useState(false);

  const NotifyData = {
    heading: "Thank You",
    para: `You have successfully reset your password
    You will now be redirected to login screen`,
    button: "Go to Login Page",
    link: "login",
  };

  return (
    <>
      <Header />

      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 w-full sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
            {notify === false ? (
              <>
                <div className="flex items-center justify-center my-6">
                  <h3 className="text-3xl font-medium text-zinc-600 tracking-wider">
                    Reset Password
                  </h3>
                </div>

                <form className="space-y-5" action="#" method="POST">
                  <div>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Password"
                        required
                        className="block w-full dark:text-zinc-700 appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 placeholder:text-lg shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mt-1">
                      <input
                        id="confirmpassword"
                        name="confirmpassword"
                        type="password"
                        autoComplete="current-confirmpassword"
                        placeholder="Confirm Password"
                        required
                        className="block w-full appearance-none rounded-md border dark:text-zinc-700 border-gray-300 px-3 py-3 placeholder-gray-400 placeholder:text-lg shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <p className="text-sm text-[#404c9c]">
                      Use 8 or more characters with a mix of letter, number &
                      symbols
                    </p>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="flex w-full justify-center rounded-md tracking-wider border border-transparent bg-[#404c9c] py-2 px-4 text-xl font-normal text-white shadow-sm hover:bg-white hover:text-[#404c9c] 
                    hover:border-[#404c9c] hover:font-semibold"
                      onClick={() => setNotify(true)}
                    >
                      Reset Password
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <NotificationPage {...NotifyData} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
