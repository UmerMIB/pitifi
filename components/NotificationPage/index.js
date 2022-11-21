import React from 'react'
import { HiOutlineCheckCircle } from "react-icons/hi2";

const index = () => {
    return (
        <>
            <div className='flex items-center justify-center mb-5 text-[#404c9c]'>
                <HiOutlineCheckCircle className='text-[3rem]' />
            </div>
            <div className="flex items-center justify-center">
                <h3 className="text-[1.70rem] font-medium text-zinc-600 tracking-wider">Password Reset Email Send</h3>
            </div>

            <div className="flex items-center justify-center my-8">
                <p className="text-base font-medium tracking-wider text-zinc-600 text-center">An Email has been sent to your email address,
                    j****@email.id. Follow the directions in the email to reset your email</p>
            </div>

            <div className="flex items-center justify-center my-7">
                <div>
                    <button
                        type='button'
                        className="flex w-full justify-center rounded-md tracking-wider border border-transparent bg-[#404c9c] py-2 px-12 text-xl font-normal text-white shadow-sm hover:bg-white 
                        hover:text-[#404c9c] hover:border-[#404c9c] hover:font-semibold"
                    >
                        Check Email
                    </button>
                </div>
            </div>
        </>
    )
}

export default index