import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  BsFullscreen,
  BsQuestionCircle,
  BsFullscreenExit,
} from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { opensidebar } from "../../redux/slices/sidebarSlice";
import { adduser, loginuser } from "../../redux/slices/loginSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [toggleScreen, setToggleScreen] = useState(false);

  const dispatch = useDispatch();

  const router = useRouter();

  const logoutHandle = () => {
    localStorage.removeItem("authenticated");
    dispatch(loginuser(false));
    router.push("/login");
  };

  const handleHomeIconRoute = () => {
    if (localStorage.getItem("authenticated")) {
      router.push("/properties");
    }
  };

  /* View in fullscreen */
  const openFullscreen = () => {
    let elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem
        .requestFullscreen()
        .then(() => setToggleScreen(true))
        .catch((err) => {
          console.log(err);
        });
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem
        .webkitRequestFullscreen()
        .then(() => setToggleScreen(true))
        .catch(() => {});
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem
        .msRequestFullscreen()
        .then(() => setToggleScreen(true))
        .catch(() => {});
    }
  };

  /* Close fullscreen */
  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      document
        .exitFullscreen()
        .then(() => setToggleScreen(false))
        .catch(() => {});
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document
        .webkitExitFullscreen()
        .then(() => setToggleScreen(false))
        .catch(() => {});
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document
        .msExitFullscreen()
        .then(() => setToggleScreen(false))
        .catch(() => {});
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, false);
    document.addEventListener("fullscreenchange", exitHandler, false);
    document.addEventListener("webkitfullscreenchange", exitHandler, false);
    document.addEventListener("mozfullscreenchange", exitHandler, false);
    document.addEventListener("MSFullscreenChange", exitHandler, false);
    return () => {
      document.removeEventListener("keydown", detectKeyDown, false);
      document.removeEventListener("fullscreenchange", exitHandler, false);
      document.removeEventListener(
        "webkitfullscreenchange",
        exitHandler,
        false
      );
      document.removeEventListener("mozfullscreenchange", exitHandler, false);
      document.removeEventListener("MSFullscreenChange", exitHandler, false);
    };
  }, []);

  const exitHandler = () => {
    if (
      !document.fullscreenElement &&
      !document.webkitIsFullScreen &&
      !document.mozFullScreen &&
      !document.msFullscreenElement
    ) {
      setToggleScreen(false);
    }
  };

  const detectKeyDown = (e) => {
    if (e.key == "F11") e.preventDefault();
  };

  const sidebarState = useSelector((state) => state.aside.sidebar);

  return (
    <Disclosure as="header" className="border-b bg-white sticky inset-0">
      {({ open }) => (
        <>
          <div className={" px-2 sm:px-4"}>
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0 w-60" style={{ gap: "20px" }}>
                {/* BUTTON HAMBURGER */}
                {localStorage.getItem("authenticated") && (
                  <div className="flex items-center bg-white  ">
                    {sidebarState === false ? (
                      <button
                        type="button"
                        className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center  text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        onClick={() => dispatch(opensidebar(true))}
                      >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon
                          className="h-[3rem] w-6"
                          aria-hidden="true"
                        />
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="ml-1 py-3 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => dispatch(opensidebar(false))}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-gray-600"
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </div>
                )}
                {/* HEADER IMAGE */}
                <div
                  className="flex flex-shrink-0 items-center"
                  onClick={handleHomeIconRoute}
                >
                  <Image
                    className="block h-8 w-auto lg:hidden cursor-pointer"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                    width={`40`}
                    height={`40`}
                  />
                  <Image
                    className="hidden h-8 w-auto lg:block cursor-pointer"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                    width={`40`}
                    height={`40`}
                  />
                </div>
              </div>
              {localStorage.getItem("authenticated") ? (
                <>
                  {/* SEARCHBAR */}
                  <div className="w-[80%] flex px-2 lg:px-0">
                    <div className="w-full hidden md:ml-6 md:flex items-center justify-center">
                      <form
                        className="flex w-full md:ml-0"
                        action="#"
                        method="GET"
                      >
                        <label htmlFor="search-field" className="sr-only">
                          Search all files
                        </label>
                        <div className="relative w-full ml-3 text-gray-400 focus-within:text-gray-600">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                            <MagnifyingGlassIcon
                              className="h-5 w-5 flex-shrink-0"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            name="search-field"
                            id="search-field"
                            className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0"
                            placeholder="Search"
                            type="search"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* ICONS AND PROFILE DROPDOWN */}
                  <div className="flex px-2 lg:px-0">
                    <div className="flex items-center justify-center">
                      <div className="p-2">
                        <BsQuestionCircle className="text-xl text-[#4756b4] cursor-pointer" />
                      </div>
                      {/* TOOGLE SCREEN ICONS */}
                      <div className="p-2">
                        {toggleScreen === false ? (
                          <BsFullscreen
                            className="text-xl text-[#4756b4] cursor-pointer"
                            onClick={openFullscreen}
                          />
                        ) : (
                          <BsFullscreenExit
                            id="id"
                            className="text-xl text-[#4756b4] cursor-pointer"
                            onClick={closeFullscreen}
                          />
                        )}
                      </div>

                      {/* profile DropDown */}
                      <Menu as="div" className="relative">
                        <div className="p-2">
                          <Menu.Button className="flex w-[32px] rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <Image
                              className="h-8 w-8 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt="Profile Pic"
                              width={`40`}
                              height={`40`}
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Your Profile
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Settings
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="/login"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                  onClick={() => logoutHandle()}
                                >
                                  Sign out
                                </Link>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </>
              ) : (
                // SIGNIN AND SIGNUP BUTTON
                <div className="flex px-2 lg:px-0">
                  <div className="hidden md:ml-6 md:flex md:space-x-8 items-center justify-center">
                    <Link
                      href="/login"
                      className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                      onClick={() => dispatch(adduser(false))}
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/signup"
                      className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-[#404c9c] px-4 py-2 text-base font-medium text-white shadow-sm
                     hover:bg-[#4756b4]"
                      onClick={() => dispatch(adduser(false))}
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              )}

              <div className="flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pt-2 pb-3">
              <div className=" mx-2 flex items-center justify-center">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex items-center px-4">
                <Link
                  href="#"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign in
                </Link>
                <Link
                  href="#"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-[#404c9c] px-4 py-2 text-base font-medium text-white shadow-sm
                     hover:bg-[#4756b4]"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
