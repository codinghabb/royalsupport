import React, { useState } from 'react'
import Image from 'next/image';
import logo from '../image/logo.jpg'
import Nav from './Nav';


function Header() {
 

  return (
    <header className='bg-white sticky top-0 flex-wrap z-20 mx-auto flex w-full items-center justify-between py-4'>
          <div className=' h-36 w-36 '>
            <a href="/home">
               <Image src={logo} alt='logo' className='m-8' />
            </a>
           
          </div>
        <Nav />
        
    </header>
  )
}

export default Header