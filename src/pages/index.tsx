import Head from 'next/head'
import { useState } from 'react';
import ServiceRight from '../components/Services/Left';
import ServiceLeft from '../components/Services/Right';

export default function Home() {
  const [openMenu, toogleMenu] = useState(false);
  
  function showMenu() {
    toogleMenu(!openMenu)
  }
  
  return (
    <div className="w-full min-h-screen ">
       <Head>
        <title>Sementes do vente</title>
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>

      {/* Header */}
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
            <a href="#" className="px-2 text-xl text-primary-800 hover:text-primary-700 hover:underline">Home</a>
            <a href="#" className="px-2 text-xl text-primary-800 hover:text-primary-700 hover:underline">Serviços</a>
            <a href="#" className="px-2 text-xl text-primary-800 hover:text-primary-700 hover:underline">Planos</a>
            <a href="#" className="px-2 text-xl text-primary-800 hover:text-primary-700 hover:underline">Blog</a>
            <a href="#" className="px-2 text-xl text-primary-800 hover:text-primary-700 hover:underline">Contato</a>
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
      </div> {/* End menu */}

      <div className={openMenu ? 'mobile-menu md:hidden' : 'hidden mobile-menu' } >
        <ul className="absolute bg-white w-full z-20 h-80 text-center">
          <li><a href="#" className="block text-xl py-4 text-primary-900 hover:bg-primary-600 hover:text-white transition duration-300">Home</a></li>
          <li><a href="#services" className="block text-xl py-4 text-primary-900 hover:bg-primary-600 hover:text-white transition duration-300">Serviços</a></li>
          <li><a href="#blog" className="block text-xl py-4 text-primary-900 hover:bg-primary-600 hover:text-white transition duration-300">Planos</a></li>
          <li><a href="#plans" className="block text-xl py-4 text-primary-900 hover:bg-primary-600 hover:text-white transition duration-300">Blog</a></li>
          <li><a href="#contact" className="block text-xl py-4 text-primary-900 hover:bg-primary-600 hover:text-white transition duration-300">Contato</a></li>
        </ul>
      </div> {/* End menu-mobile */}
      
      <div className="h-64 relative md:h-80">
        <div className="absolute inset-x-0 bottom-4">
          <img src="./images/background-logo.svg" alt="" />
        </div>

        <div className="flex relative px-6 min-h-full">
          <div className="flex flex-1 items-center justify-center">
            <div className="flex">
              <h1 className="text-4xl md:text-6xl mb-4 text-primary-800">Joana Freitas</h1>
            </div>
          </div>

          <div className="flex flex-1 items-end justify-center relative min-h-full">
            <img src="./images/person.png" alt="" className="h-64 absolute bottom-0 top-0 md:h-80 md:relative md:top-0" />
          </div>
        </div>
      </div> {/* End subheader */}
     
      </div> {/* End Header */}

       {/* content */}
      <div className="flex container mx-auto mt-8 justify-center bg-white h-80 px-6">
        <div className="flex flex-col-reverse md:flex-row flex-1  items-center justify-center space-x-6 space-y-6">
          <div className="flex flex-1  items-end justify-center ">
            <img src="./images/maos.jpg" alt="" className="h-44 md:h-64 shadow-md rounded-xl" />
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <p className="text-2xl md:text-3xl line overflow-clip overflow-hidden mb-4 break-words text-opacity-75 leading-8 text-gray-800 text-center">Doula, educadora perinatal, massoterapeuta gestacional, instrutora de Shantala, ofurô e cuidados com o bebê.</p>
          
            {/* <a href="#" className="py-3 px-12 bg-primary-500 rounded-md text-xl hover:bg-primary-600 hover:text-white">Saiba mais</a> */}
          </div>
        </div>
      </div>

      {/* servicos */}
      <div className="flex mt-8 relative">
        <div className="absolute top-0 left-0 right-0">
          <img className="w-full opacity-50" src="./images/background-inverse.svg" alt="" />
        </div>
      </div>

      <div className="flex justify-center items-center justify-items-center mt-16 mb-16">
        <h2 className="text-center text-4xl border-b-2 border-primary-500 text-gray-700">O que nós fazemos</h2>
      </div>
      

      <ServiceLeft image="/images/estudo.jpg" title="Educação Perinatal" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, debitis ea, consequuntur hic quam molestiae voluptates unde, obcaecati et dolore recusandae nobis repellat optio itaque possimus a fuga rerum nisi." />
      <ServiceRight image="/images/doulagem.jpg" title="Doulagem" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, debitis ea, consequuntur hic quam molestiae voluptates unde, obcaecati et dolore recusandae nobis repellat optio itaque possimus a fuga rerum nisi." />
      <ServiceLeft image="/images/cuidados.jpg" title="Cuidados com o bebê" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, debitis ea, consequuntur hic quam molestiae voluptates unde, obcaecati et dolore recusandae nobis repellat optio itaque possimus a fuga rerum nisi." />
      <ServiceRight image="/images/massagem.jpg" title="Massagem em gestante e puerperas" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, debitis ea, consequuntur hic quam molestiae voluptates unde, obcaecati et dolore recusandae nobis repellat optio itaque possimus a fuga rerum nisi." />
      <ServiceLeft image="/images/shantala.jpg" title="Curso de Shantala" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, debitis ea, consequuntur hic quam molestiae voluptates unde, obcaecati et dolore recusandae nobis repellat optio itaque possimus a fuga rerum nisi." />

      <div className="h-52 w-full bg-gray-300 mt-16 flex flex-col items-center justify-evenly">
         <div className="flex space-x-1">
           <img src="./images/email.svg" className="w-6" alt="" />
           <img src="./images/whatsapp.svg" className="w-5" alt="" />
           <img src="./images/instagram.svg" className="w-5" alt="" />
         </div>
 
         <div>
              <a href="#" className="flex items-center py-4 px-2">
                <img src="./images/logo.svg" className="mr-2" alt="" />
              </a>
            </div>
 
         <div>
           <span>
             Serrinha {new Date().getFullYear()}
           </span>
        </div>
      </div>
     </div>
   )
 }
 
