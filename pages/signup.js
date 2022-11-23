// import { LockClosedIcon } from "@heroicons/react/20/solid";
import Header from "../components/Header";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <Header />

      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 border border-gray-300">
          <div className="flex items-center justify-center py-3 bg-slate-100">
            <p className="text-base font-medium">Create your WebApp Account</p>
          </div>

          <div className="w-96 mx-auto">
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="contact" className="sr-only">
                    Name
                  </label>
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    autoComplete="contact"
                    required
                    className="my-2 relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Username"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email Address"
                    required
                    className="my-2 relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="property" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    required
                    className="my-2 relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                  className="group relative flex w-full justify-center border border-transparent bg-[#404c9c] py-3 px-4 text-base font-medium text-white hover:bg-white hover:text-[#404c9c] hover:border-[#404c9c] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
                  className="group relative flex w-24 justify-center border border-[#404c9c] py-2 px-4 text-sm font-normal text-[#404c9c] hover:bg-[#404c9c] hover:text-white"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
