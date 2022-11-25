import { PaperClipIcon } from "@heroicons/react/20/solid";

export default function Example({ data }) {
  return (
    <>
      {/* Table */}
      <div className="my-12 border rounded-lg w-9/12 mx-auto ">
        <div className="mt-3 px-6">
          <h3 className="text-2xl dark:text-white font-medium leading-6 text-gray-900">
            {data.mainHeading}
          </h3>
          <div className="mt-8 flex  justify-between items-center">
            <p className=" max-w-2xl text-sm dark:text-white text-gray-500">
              {data.logo}
            </p>
            <p className="  max-w-2xl text-sm dark:text-white text-gray-500">
              {data.desc}
            </p>
            <p className=" max-w-2xl text-sm dark:text-white text-gray-500">
              {data.img}
            </p>
          </div>
        </div>
        <div className=" mt-5 border-t border-gray-200">
          <dl className="divide-y divide-gray-200">
            {data.dataRow.map((currElem, i) => {
              return (
                <div
                  key={i}
                  className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5"
                >
                  <dt className="text-sm font-medium text-gray-500 dark:text-white ">
                    {currElem.title}
                  </dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <span className="flex-grow dark:text-white ">
                      {currElem.value}
                    </span>
                    <span className="ml-4 flex-shrink-0">
                      <button
                        type="button"
                        className="rounded-md bg-white font-medium dark:text-white dark:bg-black text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        {currElem.button}
                      </button>
                    </span>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </>
  );
}
