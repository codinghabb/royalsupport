import React from 'react'

import Image from 'next/image';
import Talk from '../image/talk.jpg'
import Nurse from '../image/nurse.jpg'
import Pose from '../image/pose.jpg'
import Com from '../image/com.webp'
import Footer from '../components/Footer';


function Main() {
  return (
    <>
      
        <main className=' mx-2'>
        <div className='old text-b-600'>
           
              <div className='flex flex-col md:flex-row-reverse md:space-x-16 md:items-center text-center text-2xl md:text-center'>
                  <div className='mx-auto w-1/2'>
                    <a href="/">
                        <Image src={Nurse} alt='nurse' className='w-full' /></a> 
                    
                  </div>
                    <p className='text-3xl mt-8'>
                      Best caregiving services available <br /> We are committed to <br /> provide high quality <br /> client-centered services
                    </p>
              </div>
        </div>
    
    <h1 className=' text-4xl text-center mt-4 sm:text-8xl sm:pl-52 sm:mt-32'>Introducing</h1>
      <p className=' text-3xl text-center sm:text-8xl sm:pl-80 sm:mt-32'>Royal <span className=' text-green-700'> Support</span></p>
      <p className=' text-xl text-center  mt-10'>To inspire hope and contribut to well-being of our client <br />
       by providing the best, client centered, <br />
       affordable home care to all client through proper care, <br />
        effective communication in the comfort of their homes.</p>
     
        <div className=' flex flex-col md:flex-row-reverse  md:items-center text-center text-2xl md:text-center'>
                <div className='border bg-gray-100 p-10 border-orange-300 rounded-md text-center'>

                  <h2 className='text-green-500 font-bold text-2xl'>Supported Living</h2>
                  <p className=' font-bold'>suitable <br /> accomodations you can call home</p>
                  <Image src={Pose} className='mx-auto' alt='pose' />
                </div>
                <div className='border bg-gray-100 p-10 border-orange-300 rounded-md text-center'>

                  <h2 className='text-green-500 font-bold text-2xl'>Attandant care</h2>
                  <p className=' font-bold'>dependable support in your essentials</p>
                  <Image src={Talk} className='mx-auto' alt='talk' />
                </div>
                <div className='border bg-gray-100 p-10 border-orange-300 rounded-md text-center'>

                  <h2 className='text-green-500 font-bold text-2xl'>Campanion care</h2>
                  <p className=' font-bold'>meet friendly faces with geniune hearts</p>
                  <Image src={Com}  className='mx-auto'alt='com' />
                </div>
                
        </div>

         <h1 className='text-5xl text-center mt-10 text-orange-300'>Mission, vision and Values</h1>
           <ul className='text-center mt-7 mb-10'>
              <li>To be known and valued for providing the highest standard of in-home care services.</li>
              <li> To be the provider of choice in the community.</li>
              <li>To be the employer of choice in the community</li>
              <li> To be a financially viable agency</li>
              <li> recruiting, training and retaining competent staff</li>
              <li> recruiting, training and retaining competent staff</li>
              <li>  valuing, supporting, recognizing and appreciating <br />
               our staff who are our greatest asset</li>
              <li>  nurturing a work environment that encourages <br />
               personal enjoyment and enhances job
satisfaction and performance through recognition and reward</li>
           </ul>

         
                <p className=' text-lg font-bold'>It is the responsibility of all members of the governing body, management and employees
          of the Agency to comply with federal, state and local laws, professional standards and the 
          polices/ regulations of relevant federally funded health care programs in order that care 
          provided to its clients and business interactions reflect integrity and ethical conduct</p>
          
    </main>
    </>
  )
}

export default Main