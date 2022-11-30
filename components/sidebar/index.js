import { Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import {
  BuildingOffice2Icon,
  ShieldCheckIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

const navigation = [
  { name: "Profile", to: "/profile", icon: UserCircleIcon, current: true },
  {
    name: "Properties",
    to: "/properties",
    icon: BuildingOffice2Icon,
    current: false,
  },
  {
    name: "Security",
    to: "/security",
    icon: ShieldCheckIcon,
    current: false,
  },
  {
    name: "Payment",
    to: "/payment",
    icon: CurrencyDollarIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const sidebarState = useSelector((state) => state.aside.sidebar);

  return (
    <>
      <Transition.Root show={sidebarState} as={Fragment}>
        <Disclosure
          as="aside"
          className="  sticky top-[65px] border-b "
          style={{ height: "calc(100vh - 4.1rem)" }}
          // onClose={sidebarState}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="inset-0 " />
          </Transition.Child>

          <div className="h-full flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Disclosure.Panel className="relative flex max-w-xs flex-1 w-64 flex-col bg-white">
                <div className="h-0 flex-1 overflow-y-auto pb-4">
                  <nav className="space-y-1 px-2 mt-3">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.to}
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-4 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                  <a href="#" className="group block flex-shrink-0">
                    <div className="flex items-center">
                      <div>
                        <Image
                          className="inline-block h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                          width={`40`}
                          height={`40`}
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                          Tom Cook
                        </p>
                        <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                          View profile
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </Disclosure.Panel>
            </Transition.Child>
          </div>
        </Disclosure>
      </Transition.Root>
    </>
  );
}
