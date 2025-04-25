"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { COLORS } from "@/styles/colors";

export const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-6 mx-auto lg:justify-between xl:px-1">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium font-spartan">
            <span>
              <Image
                src="/img/clogo.png"
                width="32"
                alt="N"
                height="32"
                className="w-8"
              />
            </span>
            <span className="text-primary">coffeechat</span>
          </span>
        </Link>

        {/* Right side (Theme switch, nav items, Download) */}
        <div className="flex items-center gap-4 ml-auto">
          <ThemeChanger />
          
          <a
            href="mailto:coffeechatnetworking@gmail.com"
            className="hidden md:inline-block text-textDark hover:text-primary transition-colors font-spartan"
          >
            Contact
          </a>

          <a
            href="https://apps.apple.com/us/app/coffeechat-ai-networking/id6742692440"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center px-6 py-2 text-white bg-primary rounded-full hover:opacity-90 transition-opacity font-spartan"
          >
            Download <span className="ml-1">→</span>
          </a>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-textMuted rounded-md md:hidden hover:text-primary focus:outline-none"
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
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-col items-center w-full my-5 md:hidden">
                <a
                  href="mailto:coffeechatnetworking@gmail.com"
                  className="w-full px-4 py-2 text-center text-textDark hover:text-primary transition-colors font-spartan"
                >
                  Contact
                </a>
                <a
                  href="https://apps.apple.com/us/app/coffeechat-ai-networking/id6742692440"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-3 px-4 py-2 text-center text-white bg-primary rounded-full font-spartan"
                >
                  Download
                </a>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </div>
  );
};