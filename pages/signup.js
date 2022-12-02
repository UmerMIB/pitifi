// import { LockClosedIcon } from "@heroicons/react/20/solid";
import Header from "../components/Header";
import NotificationPage from "../components/NotificationPage";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { adduser } from "../redux/slices/loginSlice";

export default function Signup() {
  const NotifyData = {
    heading: "verification Email Sent",
    para: "Thank you for registring an account xyz.we have sent an email to your email id client@email.id",
    button: "Login...",
    link: "login",
  };

  const dispatch = useDispatch();

  const signupUser = useSelector((state) => state.login.userList);

  const onClickChangeRender = () => {
    dispatch(adduser(true));
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  // const validPassword =
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  // .matches(
  //   validPassword,
  //   "Password should contain at least 1 upper case character, 1 small case character, 1 number, and 1 special character"
  // ),

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: Yup.object({
        name: Yup.string()
          .min(2, "Name must be at least 2 characters")
          .max(25)
          .required("Name required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email required"),
        password: Yup.string()
          .required("Password required")
          .min(8, "Password must be atleast of 8 characters")
          .matches(/[0-9]/, "Password requires a number")
          .matches(/[a-z]/, "Password requires a lowercase letter")
          .matches(/[A-Z]/, "Password requires an uppercase letter")
          .matches(/[^\w]/, "Password requires a symbol"),
      }),
      onSubmit: (values, action) => {
        onClickChangeRender();
        action.resetForm();
      },
    });

  return (
    <>
      <Header />
      {signupUser === false ? (
        <div className="flex min-h-full items-center justify-center py-9 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md shadow bg-white sm:rounded-lg">
            <div className="flex items-center justify-center my-6">
              <h3 className="text-3xl font-medium text-zinc-700 tracking-wider">
                Sign Up
              </h3>
            </div>

            <div className="w-96 mx-auto">
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
                action="#"
                method="POST"
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className=" rounded-md">
                  <div className="mt-3">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block w-full text-zinc-600 text-xl appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 placeholder:text-lg shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Username"
                    />
                    {errors.name && touched.name ? (
                      <p className="text-[#b22b27] text-[1rem]">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>
                  <div className="mt-3">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Email Address"
                      className="block w-full text-zinc-600   text-xl appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 placeholder:text-lg shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                    {errors.email && touched.email ? (
                      <p className="text-[#b22b27] text-[1rem]">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div className="mt-3">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Password"
                      className="block w-full text-zinc-600  text-xl appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 placeholder:text-lg shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                    {errors.password && touched.password ? (
                      <p className="text-[#b22b27] text-[1rem]">
                        {errors.password}
                      </p>
                    ) : null}
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
                    className="flex w-full justify-center rounded-md tracking-wider border border-transparent bg-[#404c9c] py-2 px-4 text-2xl font-normal text-white shadow-sm hover:bg-white hover:text-[#404c9c] 
                    hover:border-[#404c9c] hover:font-semibold"
                  >
                    Sign up
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-between my-5">
                <div>
                  <p className="font-medium text-zinc-500 tracking-wide">
                    I already have an acccount
                  </p>
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
