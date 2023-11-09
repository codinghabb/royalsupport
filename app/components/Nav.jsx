import React from 'react'
import { useState } from 'react';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

      const toggleNavbar =()=> {
    setIsOpen(!isOpen);                                                                                   
 }

  return (
    < >
    <nav className=' w-1/3 justify-end'>
        <div>
            <ul className='hidden w-full justify-between md:flex'>
                <li><a href="/home">About us</a></li>
                <li><a href="/services ">Services</a></li>
                <li><a href="/career">Careers</a></li>
            </ul>
        </div>
       
        <div className='md:hidden'>
            <button  onClick={toggleNavbar}>
      
                {isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className=" cursor-pointer w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className=" cursor-pointer w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                  </svg>
                )}

        </button>
        </div>
        
    </nav>
    {isOpen && (
       
            <ul className='flex flex-col  items-start basis-full'>
                <li><a href="/home">About us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/career">Careers</a></li>
            </ul>
        
    )}
      
      
      
    </>
  )
}

export default Nav