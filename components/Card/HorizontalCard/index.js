import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function Example({ data }) {
  return (
    <div>
      <div className="h-[110px] col-span-1 flex rounded-md shadow-sm border border-gray-200">
        <Image
          className="flex-shrink-0 flex items-center justify-center w-20 pl-[12px] py-[12px] text-white text-sm font-medium rounded-l-md"
          src={data.img}
          alt="card img"
          width={`40`}
          height={`40`}
        />

        <div className="flex flex-1 items-center justify-between truncate rounded-r-md bg-white">
          <div className="flex-1 grid gap-5 truncate px-4 py-2 text-sm">
            <div className="font-medium text-gray-900 hover:text-gray-600">
              {data.name}
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500">{data.desc}</p>
              <p className="text-gray-500">{data.address}</p>
              {data.loginAccess && (
                <Link
                  href="#"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-[#ce372e] px-4 py-[5px] text-base font-medium text-white shadow-sm
               hover:bg-[#ec3f35]"
                >
                  {data.loginAccess}
                </Link>
              )}
              {data.loginIp && <p className="text-gray-500">{data.loginIp}</p>}
            </div>
          </div>
          <div className="flex-shrink-0 pr-2">
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="sr-only">Open options</span>
              <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
