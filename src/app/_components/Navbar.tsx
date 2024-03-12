"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {

    const pathname = usePathname()
    console.log(pathname);

    return (
        <nav className="border-gray-200 bg-transparent w-full">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4 ">
                <Link href="/" className="flex items-center space-x-3">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white hover:text-orange-400">Portfolio</span>
                </Link>
                <button type="button" className="p-2 w-10 h-10 justify-center text-sm md:hidden text-white hover:text-orange-400">
                    <GiHamburgerMenu size={30} />
                </button>
                <div className="hidden w-full md:block md:w-auto text-white">
                    <ul className="capitalize font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-transparent">
                        <li>
                            <Link href="/" className={`py-2 px-3 text-xl rounded  hover:text-orange-400 font-semibold ${pathname == "/" && ' !text-orange-500'} `}>Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className={`py-2 px-3 text-xl rounded  hover:text-orange-400 font-semibold ${pathname == "/about" && 'text-orange-500'}`}>About</Link>
                        </li>
                        <li>
                            <Link href="/project" className={`py-2 px-3 text-xl rounded   hover:text-orange-400 font-semibold ${pathname == "/project" && 'text-orange-500'}`}>project</Link>
                        </li>
                        <li>
                            <Link href="/contact" className={`py-2 px-3 text-xl rounded  hover:text-orange-400 font-semibold ${pathname == "/contact" && 'text-orange-500'}`}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar