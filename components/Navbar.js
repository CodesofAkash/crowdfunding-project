"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from "next/image";


const Navbar = () => {

  const { data: session } = useSession();
  const [showDropdown, setshowDropdown] = useState(false)

  return (
    <nav className='bg-gray-900 text-white p-4 px-8 flex justify-between gap-10 items-center'>
      <Link href="/">
        <div className="logo flex justify-center items-center gap-5 w-fit">
          <Image src="/chai.gif" alt="error" width={48} height={48} />
          <span className='font-bold text-lg'>GetMeaChai!</span>
        </div>
      </Link>
      <ul className='flex justify-between items-center gap-10'>
        <li className="cursor-pointer"><Link href={"/users"}>Contributions</Link></li>
        <li className="cursor-pointer"><Link href={"/about"}>About</Link></li>
        <li className="cursor-pointer"><Link href={"/start"}>Projects</Link></li>
        <li className='flex gap-2 relative'>

          {session && (
            <>
              <button onMouseEnter={() => setshowDropdown(true)} onMouseLeave={() => setshowDropdown(false)} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.name}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/></svg></button>

              <div onMouseEnter={() => setshowDropdown(true)} onMouseLeave={() => setshowDropdown(false)} id="dropdownHover" className={`absolute left-[50px] top-[50px] z-10 ${showDropdown ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                  <li>
                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href={`/`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Home Page
                    </Link>
                  </li>
                  <li>
                    <span onClick={() => { signOut() }} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Sign Out
                    </span>
                  </li>
                </ul>
              </div>
            </>
          )}


          <Link href="/login"><button type="button" className={session ? "hidden" : "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center"}>Login</button></Link>
          <button onClick={() => { signOut() }} type="button" className={session ? "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center" : "hidden"}>LogOut</button>
          <span className={session ? "text-2xl hidden" : "text-2xl block"}>/</span>
          <Link href="/signup"><button type="button" className={session ? "hidden" : "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center"}>Sign Up</button></Link>
          {session && <Link href={`/${session?"/":"login"}`}><Image width={40} height={40} src={session.user.image} alt="error" className="rounded-full" /></Link>}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
