import React, { useState, useEffect } from 'react'

export default function Menu () {
  const [openMenu, toogleMenu] = useState(false);
  
  function showMenu() {
    toogleMenu(!openMenu)
  }
  
  // const openMenu = this.state.openMenu
  return (
    
    <nav className="bg-primary-300">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between">
        <div className="flex space-x-7">
          {/* logo */}
          <div>
            <a href="#" className="flex items-center py-4 px-2">
              <img src="./images/logo.svg" className="mr-2" alt="" />
            </a>
          </div>
          
        </div>
          {/* Primary navbar items */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="" className="px-2 font-semibold font-sans">Home</a>
            <a href="" className="px-2 font-semibold font-sans">Home1</a>
            <a href="" className="px-2 font-semibold">Home</a>
            <a href="" className="px-2 font-semibold">Home</a>
          </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center" >
          <button className="md:hidden outline-none mobile-menu-button text-black" onClick={showMenu} >
            { !openMenu ? 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          :
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            
           
             }
          </button>
        </div>
      </div>
    </div>
    <div className={openMenu ? 'mobile-menu md:hidden' : 'hidden mobile-menu' } >
      <ul className="">
        <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-primary-600 font-semibold">Hom 1e</a></li>
        <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-primary-500 transition duration-300">Services</a></li>
        <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-primary-600 transition duration-300">About</a></li>
        <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-primary-600 transition duration-300">Contact Us</a></li>
      </ul>
    </div>
  </nav>
  )
}