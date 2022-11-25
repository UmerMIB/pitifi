import { EnvelopeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";

export default function Example(data) {
  return (
    <div className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">
              {data.hotelName}
            </h3>
          </div>
          <p className="mt-1 truncate text-sm text-gray-500">{data.phoneNo}</p>
          <p className="mt-1 truncate text-sm text-gray-500">{data.email}</p>
          <p className="mt-1 truncate text-sm text-gray-500">{data.website}</p>
          <p className="mt-1 truncate text-sm text-gray-500">
            {data.postalAddress}
          </p>
        </div>
        <Image
          className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
          src={data.imageUrl}
          alt=""
        />
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <Link
              href="/property"
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
            >
              <EnvelopeIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span className="ml-3">Manage Property...</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
