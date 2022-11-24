import NotificationPage from "../components/NotificationPage";
import React, { useState } from "react";
import Header from "../components/Header";
import Link from "next/link";

export default function Resetpassword() {
  const [notify, setNotify] = useState(false);

  const NotifyData = {
    heading: "Password Reset Email Send",
    para: "An Email has been sent to your email address,j****@email.id. Follow the directions in the email to reset your email",
    button: "Check Email",
    link: "reset-password-confirm",
  };

  return (
    <>
      <Header />
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 w-full sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
            {notify === false ? (
              <>
                <div className="flex items-center justify-center">
                  <h3 className="text-3xl font-medium text-zinc-600 tracking-wider">
                    Reset Password
                  </h3>
                </div>

                <div className="flex items-center justify-center my-8">
                  <p className="text-sm text-zinc-700 text-center">
                    Enter the email address with your account, and we'll email
                    you a link to reset your password
                  </p>
                </div>

                <form className="space-y-5" action="#" method="POST">
                  <div>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="current-email"
                        placeholder="Email"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 placeholder:text-lg shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="flex w-full justify-center rounded-md tracking-wider border border-transparent bg-[#404c9c] py-2 px-4 text-xl font-normal text-white shadow-sm hover:bg-white hover:text-[#404c9c] hover:border-[#404c9c] hover:font-semibold"
                      onClick={() => setNotify(true)}
                    >
                      Send Reset Link
                    </button>
                  </div>
                </form>

                <div className="flex items-center justify-center my-7">
                  <div>
                    <Link
                      href="/login"
                      className="group relative flex  justify-center text-lg underline underline-offset-3 font-semibold text-[#404c9c] hover:text-[#5b6ace]"
                    >
                      Back to Log in
                    </Link>
                  </div>
                </div>
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
