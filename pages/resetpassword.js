import NotificationPage from '../components/NotificationPage'
import React, { useState } from 'react'
import Header from "../components/Header";

export default function Resetpassword() {
    const [notify, setNotify] = useState(false)
    return (
        <>
            <Header />
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">

                <div className="mt-8 w-full sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
                        {
                            notify === false ?
                                <>
                                    <div className="flex items-center justify-center">
                                        <h3 className="text-3xl font-medium text-zinc-600 tracking-wider">Reset Password</h3>
                                    </div>

                                    <div className="flex items-center justify-center my-8">
                                        <p className="text-sm text-zinc-700 text-center">Enter the email address with your account, and we'll email you a link to reset your password</p>
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
                                                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 placeholder:text-lg shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="flex w-full justify-center rounded-md tracking-wider border border-transparent bg-[#404c9c] py-2 px-4 text-xl font-normal text-white shadow-sm hover:bg-white hover:text-[#404c9c] hover:border-[#404c9c] hover:font-semibold"
                                            >
                                                Send Reset Link
                                            </button>
                                        </div>
                                    </form>

                                    <div className="flex items-center justify-center my-7">
                                        <div>
                                            <button
                                                type='button'
                                                className="group relative flex  justify-center text-lg underline underline-offset-3 font-semibold text-[#404c9c] hover:text-[#5b6ace]"
                                                onClick={() => setNotify(true)}
                                            >
                                                Back to Log in
                                            </button>
                                        </div>
                                    </div>
                                </>
                                :
                                <NotificationPage />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}