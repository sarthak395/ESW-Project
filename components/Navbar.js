import React from 'react'
import Link from 'next/link'
import { IoIosContact } from 'react-icons/io'
import { useState } from 'react'

const Navbar=({logout, user})=>{
  var date = new Date() // current date
  var datestring = date.getFullYear().toString()+'-'+(date.getMonth()+1).toString()+'-'+date.getDate().toString()

  const [dropdown, setdropdown] = useState(false)
  const toggleDropdown = () => {
    setdropdown(!dropdown)
  }
  const handlelogout = () => {
    setTimeout(() => {
      logout();
    }, 2000);
  }

    return (
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={'/'}><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Tailblocks</span>
    </a></Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href={'/soil'}><a className="text-gray-900 mr-5 mx-2 hover:text-blue-900">Soil Moisture</a></Link>
      <Link href={'/co2'}><a className=" text-gray-900 mr-5 mx-2 hover:text-blue-900">CO2 level</a></Link>
      <Link href={`/light?backdate=${datestring}`}><a className=" text-gray-900 mr-5 mx-2 hover:text-blue-900">Light Intensity</a></Link>
      <Link href={'/temperature'}><a className=" text-gray-900 mr-5 mx-2 hover:text-blue-900">Temperarure and Humidity</a></Link>
    </nav>

    {user && <IoIosContact onMouseEnter={toggleDropdown} size={40} />}

    {!user && <Link href={'/login'}><button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button></Link>}

    {/* Dropdown Menu */}
    {dropdown && <div id="dropdown" onMouseLeave={toggleDropdown} class="absolute top-12 right-16 z-10 w-44  bg-white rounded my-3 divide-y divide-gray-100 shadow dark:bg-gray-700">
          <ul class="py-1 text-sm text-gray-700 dark:text-gray-200 transition ease-in origin-top-left duration-200" aria-labelledby="dropdownDefault">
            <li className='dark:hover:bg-gray-500'>
              <button onClick={handlelogout} href="#" class="block py-2 px-4">Logout</button>
            </li>
          </ul>
        </div>}

  </div>
</header>
    )
}

export default Navbar