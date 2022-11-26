import Link from "next/link";
import React from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";

const index = (NotifyData) => {
  return (
    <>
      <div className="flex items-center justify-center dark:text-white mb-5 text-[#404c9c]">
        <HiOutlineCheckCircle className="text-[3rem]" />
      </div>
      <div className="flex items-center justify-center">
        <h3 className="text-[1.70rem] dark:text-white font-medium text-zinc-600 tracking-wider">
          {NotifyData.heading}
        </h3>
      </div>

      <div className="flex dark:text-white items-center justify-center my-8">
        <p className="text-base dark:text-white font-medium tracking-wider text-zinc-600 text-center">
          {NotifyData.para}
        </p>
      </div>

      <div className="flex items-center justify-center my-7">
        <div>
          <Link
            href={NotifyData.link}
            className="flex w-full justify-center rounded-md tracking-wider border border-transparent bg-[#404c9c] py-2 px-12 text-xl font-normal text-white shadow-sm hover:bg-white 
                        hover:text-[#404c9c] hover:border-[#404c9c] hover:font-semibold"
          >
            {NotifyData.button}
          </Link>
        </div>
      </div>
    </>
  );
};

export default index;
