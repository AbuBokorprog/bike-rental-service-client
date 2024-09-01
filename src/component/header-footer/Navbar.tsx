import React, { useState } from "react";
import MenuSidebar from "./MenuSidebar";

const Navbar = () => {
  const [isOpenDashboard, setIsOpenDashboard] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white border-secondary-200 dark:bg-secondary-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              RentMyRide
            </span>
          </a>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={() => setIsOpenDashboard(!isOpenDashboard)}
              type="button"
              className="flex text-sm bg-secondary-800 rounded-full md:me-0 focus:ring-4 focus:ring-secondary-300 dark:focus:ring-secondary-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="user photo"
              />
            </button>
            {/* <!-- Dropdown menu --> */}
            {isOpenDashboard && (
              <div className="z-50 my-4 absolute top-10 right-0 lg:right-32 text-base list-none bg-white divide-y divide-secondary-100 rounded-lg shadow dark:bg-secondary-700 dark:divide-secondary-600">
                <div className="px-4 py-3">
                  <span className="block text-sm text-secondary-900 dark:text-white">
                    Bonnie Green
                  </span>
                  <span className="block text-sm  text-secondary-500 truncate dark:text-secondary-400">
                    name@flowbite.com
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100 dark:hover:bg-secondary-600 dark:text-secondary-200 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100 dark:hover:bg-secondary-600 dark:text-secondary-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100 dark:hover:bg-secondary-600 dark:text-secondary-200 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100 dark:hover:bg-secondary-600 dark:text-secondary-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
            {/*  */}
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-secondary-500 rounded-lg md:hidden hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-secondary-200 dark:text-secondary-400 dark:hover:bg-secondary-700 dark:focus:ring-secondary-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-secondary-100 rounded-lg bg-secondary-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-secondary-800 md:dark:bg-secondary-900 dark:border-secondary-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0 md:dark:text-primary-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-secondary-900 rounded hover:bg-secondary-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-secondary-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-secondary-700"
                >
                  Bikes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-secondary-900 rounded hover:bg-secondary-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-secondary-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-secondary-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-secondary-900 rounded hover:bg-secondary-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-secondary-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-secondary-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <MenuSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;
