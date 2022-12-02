import Header from "../components/Header";
import NotificationPage from "../components/NotificationPage";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Resetconfirm() {
  const [notify, setNotify] = useState(false);

  const NotifyData = {
    heading: "Thank You",
    para: `You have successfully reset your password
    You will now be redirected to login screen`,
    button: "Go to Login Page",
    link: "login",
  };

  const initialValues = {
    password: "",
    confirmpassword: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: Yup.object({
        password: Yup.string()
          .required("Password required")
          .min(8, "Password must be atleast of 8 characters")
          .matches(/[0-9]/, "Password requires a number")
          .matches(/[a-z]/, "Password requires a lowercase letter")
          .matches(/[A-Z]/, "Password requires an uppercase letter")
          .matches(/[^\w]/, "Password requires a symbol"),
        confirmpassword: Yup.string()
          .required("Confirm Password Required")
          .oneOf([Yup.ref("password"), null], "Password must match"),
      }),
      onSubmit: (values, action) => {
        console.log(values), setNotify(true), action.resetForm();
      },
    });

  return (
    <>
      <Header />

      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 w-full sm:mx-auto sm:w-full sm:max-w-md">
          {notify === false ? (
            <>
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div className="flex items-center justify-center my-6">
                  <h3 className="text-3xl font-medium text-zinc-600 tracking-wider">
                    Reset Password
                  </h3>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  action="#"
                  method="POST"
                >
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
                        className="block w-full text-zinc-600 appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 placeholder:text-lg shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                      {errors.password && touched.password ? (
                        <p className="text-[#b22b27] text-[1rem]">
                          {errors.password}
                        </p>
                      ) : null}
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
                        value={values.confirmpassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="block w-full text-zinc-600 appearance-none rounded-md border  border-gray-300 px-3 py-3 placeholder-gray-400 placeholder:text-lg shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                      {errors.confirmpassword && touched.confirmpassword ? (
                        <p className="text-[#b22b27] text-[1rem]">
                          {errors.confirmpassword}
                        </p>
                      ) : null}
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
                      type="submit"
                      className="flex w-full justify-center rounded-md tracking-wider border border-transparent bg-[#404c9c] py-2 px-4 text-xl font-normal text-white shadow-sm hover:bg-white hover:text-[#404c9c] 
                    hover:border-[#404c9c] hover:font-semibold"
                    >
                      Reset Password
                    </button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <NotificationPage {...NotifyData} />
          )}
        </div>
      </div>
    </>
  );
}
