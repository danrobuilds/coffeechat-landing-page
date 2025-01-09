"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useState } from "react";

// Import your PopupWidget
import { PopupWidget } from "@/components/PopupWidget";

export const Navbar = () => {
  const navigation = ["Contact"];

  // State to control the popup modal
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-black-500 dark:text-gray-100">
            <span>
              <Image
                src="/img/clogo.png"
                width="32"
                alt="N"
                height="32"
                className="w-8"
              />
            </span>
            <span>Coffeechat</span>
          </span>
        </Link>

        {/* Right side (Theme switch, nav items, Waitlist) */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />

          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href="/"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>

          {/* 
            Instead of a <Link>, use a button to open the modal 
            This calls setModalOpen(true) 
          */}
          <div className="hidden mr-3 lg:flex nav__item">
            <button
              onClick={() => setModalOpen(true)}
              className="rounded-md p-1 md:ml-5"
              style={{
                background: "linear-gradient(to right, #3b82f6, #ef4444)",
                backgroundClip: "padding-box",
                WebkitBackgroundClip: "padding-box",
              }}
            >
              <div className="px-6 py-2 text-white bg-transparent rounded-md">
                Join Waitlist
              </div>
            </button>
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 
                         1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 
                         1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 
                         2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href="/"
                      className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                    >
                      {item}
                    </Link>
                  ))}
                  {/* Mobile version of Join Waitlist */}
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                  >
                    Join Waitlist
                  </button>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>

      {/* Render the same PopupWidget, passing open + onClose */}
      <PopupWidget open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};