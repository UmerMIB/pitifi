// import { LockClosedIcon } from "@heroicons/react/20/solid";
import Header from "../components/Header";
import NotificationPage from "../components/NotificationPage";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adduser } from "../redux/slices/loginSlice";
import { useRouter } from "next/router";

export default function Signup() {
  const [renderPage, setRenderPage] = useState(false);
  const NotifyData = {
    heading: "verification Email Sent",
    para: "Thank you for registring an account xyz.we have sent an email to your email id client@email.id",
    button: "Login...",
    link: "login",
  };

  const router = useRouter();

  const dispatch = useDispatch();

  const [credetials, setCredetials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangehandler = (e) => {
    setCredetials({ ...credetials, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const { name, email, password } = credetials;
    dispatch(adduser({ name, email, password }));
    router.push("/login");
  };
  return (
    <>
      <Header />
      {renderPage === false ? (
        <div className="flex min-h-full items-center justify-center py-9 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md shadow bg-white sm:rounded-lg">
            {/* <div className="flex items-center justify-center py-3 bg-slate-100">
              <p className="text-base font-medium">
                Create your WebApp Account
              </p>
            </div> */}
            <div className="flex items-center justify-center my-6">
              <h3 className="text-3xl font-medium text-zinc-700 tracking-wider">
                Sign Up
              </h3>
            </div>

            <div className="w-96 mx-auto">
              <form
                onSubmit={submitForm}
                className="mt-8 space-y-6"
                // action="#"
                method="POST"
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className=" rounded-md shadow-sm">
                  <div className="mt-4">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={credetials.name}
                      onChange={onChangehandler}
                      required
                      className="block w-full dark:text-zinc-700  text-xl appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 placeholder:text-lg shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={credetials.email}
                      onChange={onChangehandler}
                      placeholder="Email Address"
                      required
                      className="block w-full  dark:text-zinc-700  text-xl appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 placeholder:text-lg shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="mt-4">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      value={credetials.password}
                      onChange={onChangehandler}
                      placeholder="Password"
                      required
                      className="block w-full dark:text-zinc-700  text-xl appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 placeholder:text-lg shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 mb-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div>
                      <label
                        htmlFor="remember-me"
                        className="ml-2 text-sm text-gray-900 whitespace-normal"
                      >
                        I agree to the
                        <a
                          href="#"
                          className="ml-1 font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Customer Agreement,
                        </a>
                        <a
                          href="#"
                          className=" ml-1 font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Privacy Policy, <br />
                        </a>
                        <a
                          href="#"
                          className="ml-2 font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    onClick={() => setRenderPage(true)}
                    className="flex w-full justify-center rounded-md tracking-wider border border-transparent bg-[#404c9c] py-2 px-4 text-2xl font-normal text-white shadow-sm hover:bg-white hover:text-[#404c9c] 
                    hover:border-[#404c9c] hover:font-semibold"
                  >
                    Sign up
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-between my-7">
                <div>
                  <p className="font-medium">I already have an acccount</p>
                </div>
                <div>
                  <Link
                    href="/login"
                    className="group relative flex w-24 justify-center text-lg underline underline-offset-3 py-3 px-4 font-semibold text-[#404c9c] hover:text-[#5b6ace]"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="mt-8 w-full sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
              <NotificationPage {...NotifyData} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
