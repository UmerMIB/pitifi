import Header from "../components/Header";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Login() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}

      <Header />

      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            

            <div className="flex items-center justify-center my-6">
              <h3 className="text-3xl font-medium text-zinc-600 tracking-wider">Sign in</h3>
            </div>

            <form className="space-y-6" action="#" method="POST">
              <div>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email Address"
                    required
                    className="block w-full  text-xl appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 placeholder:text-lg shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
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
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 placeholder:text-lg shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
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
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-normal text-gray-800 hover:text-indigo-500">
                    Forgot password?
                  </a>
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

            <div className="flex items-center justify-between my-7">
            <div>
              <p className="font-medium text-zinc-500 tracking-wide">Don't have an account</p>
            </div>
            <div>
              <button
                type="button"
                className="group relative flex w-24 justify-center text-lg underline underline-offset-3 py-3 px-4 font-semibold text-[#404c9c] hover:text-[#5b6ace]"
              >
                Sign up
              </button>
            </div>
          </div>


            
          </div>
        </div>
      </div>
    </>
  )
}
