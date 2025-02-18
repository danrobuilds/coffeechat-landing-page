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
        <div className="flex items-center gap-3 nav__item mr-2 ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />

          <ul className="hidden lg:flex items-center justify-end flex-1 list-none">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <a
                  href="mailto:drosario@college.harvard.edu"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu}
                </a>
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
              className="rounded-xl p-1 md:ml-5 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-red-400 transition-all duration-300 group-hover:scale-105" />
              <div className="px-6 py-2 text-white relative z-10">
                Early Access
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

              <Disclosure.Panel className="flex flex-col items-center w-full my-5 lg:hidden">
                <>
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href="/"
                      className="w-full px-4 py-2 text-center text-gray-500 rounded-md dark:text-gray-300 hover:text-sky-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                    >
                      {item}
                    </Link>
                  ))}
                  {/* Mobile version of Join Waitlist */}
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-sky-600 rounded-md lg:ml-5"
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