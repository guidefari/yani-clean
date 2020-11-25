// import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import { Box} from 'react-feather'
import {navLinks} from './navLinks'
import Link from "next/link";

console.log(navLinks)
function Header() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <header className="text-gray-700 body-font">
        <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
            <Link href='/' className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                <img className='w-32 h-14' src="/assets/logofill.svg" alt="Yani Clean logo"/>
            </Link>
            <nav className="flex flex-wrap items-center justify-center space-x-2 text-base md:ml-auto">
                <Link href='/about' className="mr-5 hover:text-gray-900">About</Link>
                <Link href='/work4us' className="mr-5 hover:text-gray-900">Work for us</Link>
                <Link href='/book'>
                    <button className="inline-flex items-center px-3 py-1 text-base bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300 ">Book Now
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </Link>
            </nav>
        </div>
    </header>

    </>
  );
}

export default Header;