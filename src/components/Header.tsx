import { useState } from "react";
// import Menu from "./Menu";

export default function Header () {
  const [openMenu, toogleMenu] = useState(false);
  
  function showMenu() {
    toogleMenu(!openMenu)
  }
  return (
    <div className="w-full bg-gradient-to-br from-primary-500 to-secondary-400 relative flex flex-col shadow-md">
      <div className="flex py-2 justify-between items-center container mx-auto">
        <div className="flex px-6">
          <div>
            <a href="#" className="flex items-center py-4 px-2">
              <img src="./images/logo.svg" className="mr-2" alt="" />
            </a>
          </div>
        </div>

        {/* Primary navbar items */}
        <div className="hidden md:flex items-center space-x-2">
          <a href="#" className="px-2 font-semibold text-xl text-primary-700 hover:text-primary-800 hover:underline">Home</a>
          <a href="#" className="px-2 font-semibold text-xl text-primary-700 hover:text-primary-800 hover:underline">Serviços</a>
          <a href="#" className="px-2 font-semibold text-xl text-primary-700 hover:text-primary-800 hover:underline">Planos</a>
          <a href="#" className="px-2 font-semibold text-xl text-primary-700 hover:text-primary-800 hover:underline">Blog</a>
          <a href="#" className="px-2 font-semibold text-xl text-primary-700 hover:text-primary-800 hover:underline">Contato</a>
        </div>

        <div className="md:hidden flex items-center px-6" >
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
      <div className={openMenu ? 'mobile-menu md:hidden' : 'hidden mobile-menu' } >
        <ul className="px-6">
          <li><a href="#" className="block text-xl px-2 py-4 text-primary-900 hover:bg-primary-600 hover:text-white transition duration-300">Home</a></li>
          <li><a href="#services" className="block text-xl px-2 py-4 text-primary-900 hover:bg-primary-600 hover:text-white transition duration-300">Services</a></li>
          <li><a href="#blog" className="block text-xl px-2 py-4 text-primary-900 hover:bg-primary-600 hover:text-white transition duration-300">Planos</a></li>
          <li><a href="#plans" className="block text-xl px-2 py-4 text-primary-900 hover:bg-primary-600 hover:text-white transition duration-300">Blog</a></li>
          <li><a href="#contact" className="block text-xl px-2 py-4 text-primary-900 hover:bg-primary-600 hover:text-white transition duration-300">Contato</a></li>
        </ul>
      </div>

      <div className="flex container mx-auto mt-8 justify-center bg-white h-80">
        <div className="flex flex-1  items-center justify-center ">
          <div className="flex flex-1  items-end justify-center ">
            <img src="./images/maos.jpg" alt="" className="h-56 shadow-md rounded-xl" />
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <p className="text-3xl line overflow-clip overflow-hidden mb-4 break-words text-opacity-75 leading-8 text-gray-800">Doula, educadora perinatal, massoterapeuta gestacional, instrutora de Shantala, ofurô e cuidados com o bebê.</p>
      
              {/* <a href="#" className="py-3 px-12 bg-primary-500 rounded-md text-xl hover:bg-primary-600 hover:text-white">Saiba mais</a> */}
            </div>
        </div>
      </div>
    </div>
    
  )
}