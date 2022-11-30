import Header from "../components/Header";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

import { loginuser, adduser } from "../redux/slices/loginSlice";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const loginUser = useSelector((state) => state.login.loginList);
  console.log(loginUser);

  const authLoginUser = () => {
    localStorage.setItem("authenticated", true);
    router.push("/properties");
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email Required"),
        password: Yup.string()
          .required("Password required")
          .min(8, "Password must be atleast of 8 characters")
          .matches(/[0-9]/, "Password requires a number")
          .matches(/[a-z]/, "Password requires a lowercase letter")
          .matches(/[A-Z]/, "Password requires an uppercase letter")
          .matches(/[^\w]/, "Password requires a symbol"),
      }),
      onSubmit: (values, action) => {
        dispatch(loginuser(true));
        authLoginUser();
        action.resetForm();
      },
    });

  return (
    <>
      <Header />
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="flex items-center justify-center mt-1 mb-6">
              <h3 className="text-3xl font-medium text-zinc-600 tracking-wider">
                Sign in
              </h3>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="#"
              method="POST"
            >
              <div>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email Address"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full text-zinc-600   text-xl appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 placeholder:text-lg shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                  {errors.email && touched.email ? (
                    <p className="text-[#b22b27] text-[1rem]">{errors.email}</p>
                  ) : null}
                </div>
              </div>

              <div>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full text-zinc-600  appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 placeholder:text-lg shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    href="/reset-password"
                    className="font-normal text-gray-800 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md tracking-wider border border-transparent bg-[#404c9c] py-2 px-4 text-2xl font-normal text-white shadow-sm hover:bg-white hover:text-[#404c9c] 
                  hover:border-[#404c9c] hover:font-semibold"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between mt-6">
              <div>
                <p className="font-medium text-zinc-500 tracking-wide">
                  Don&apos;t have an account
                </p>
              </div>
              <div>
                <Link
                  href="/signup"
                  className="group relative flex w-24 justify-center text-lg underline underline-offset-3 py-3 px-4 font-semibold text-[#404c9c] hover:text-[#5b6ace]"
                  onClick={() => dispatch(adduser(false))}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
