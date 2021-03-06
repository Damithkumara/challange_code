import React, { useState } from "react";
import { Transition, transition } from "@headlessui/react"; //smooth transition
import { Link } from "react-scroll"; // smooth scroll through the page

const links = [
  { title: "Home", link: "home" },
  { title: "Skills", link: "skills" },
  { title: "Work", link: "work" },
  { title: "Clients", link: "clients" },
  { title: "Contact", link: "contact" },
];

const linkForMobile = [
  { href: ["/home"], activeto: "home", title: "Home" },
  { href: ["/Skills"], activeto: "skills", title: "Skills" },
  { href: ["/work"], activeto: "work", title: "Work" },
  { href: ["/clients"], activeto: "clients", title: "Clients" },
  { href: ["/contact"], activeto: "contact", title: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="fixed z-20 bg-white w-full">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center sm:mx-10 md:mx-20 justify-between w-full">
              {/* logo section */}
              <div className="flex justify-center items-center flex-shrink-0 ml-10">
                <h1 className="font-bold text-xl cursor-pointer">
                  DK<span className="text-pink-500">OFFICIAL</span>
                </h1>
              </div>
              {/* link section */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {links.map((val, key) => {
                    return (
                      <Link
                        key={key}
                        activeClass={val.link}
                        to={val.link}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="cursor-pointer text-black px-3 py-2 text-md hover:text-pink-500"
                      >
                        {val.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* code for mobile view */}
            <div className="mr-14 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-black inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-pink-500 focus:outline-none focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open Main Menu</span>
                {/* menu function */}
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmls="http://www.w3org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24 "
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmls="http://www.w3org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24 "
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* small mobile navbar */}
        {/* transition property smooth */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-white mx-4 mr-20 pt-4 pb-4 space-y-1"
              >
                {linkForMobile.map((val, key) => {
                  return (
                    <Link
                      key={key}
                      href={val.href}
                      activeClass={val.activeto}
                      to={val.activeto}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer hover:text-pink-500 text-black block px-3  py-2 rounded-md text-base font-medium "
                    >
                      {val.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
