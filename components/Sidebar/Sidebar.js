import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
  const [collapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-blue z-50 flex flex-wrap items-center justify-between relative md:w-64 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none  rounded border border-solid border-transparent"
            type="button"
          >
          </button>
          <Link href="/">
            <a
              href="#"
              className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0 text-white"
            >
             <img src={'logo.png'} />
            </a>
          </Link>
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            <hr className="my-4 md:min-w-full" />
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/">
                  <a
                    href="#"
                    className="text-xs uppercase py-3 font-bold block text-lightBlue-500 hover:text-lightBlue-600 text-white"
                  >
                    Dashboard
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/">
                  <a
                    href="#"
                    className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500 text-white">
                    Button
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/tables">
                  <a
                    href="#"
                    className="text-xs uppercase py-3 font-bold block text-white">
                    Tables
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/Otros">
                  <a
                    href="#"
                    className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500 text-white"
                  >
                    Otros
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
