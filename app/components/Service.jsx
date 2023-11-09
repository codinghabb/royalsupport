import React from 'react'
import Image from 'next/image'
import Nurse from '../image/nurse.jpg'
import Companion from '../image/companion.jpeg'
import reminders from '../image/reminders.jpeg'
import meal from '../image/meal.jpeg'
import Groom from '../image/grooming.jpeg'
import transport from  '../image/transportation.jpeg'
import errands from  '../image/errands.jpeg'
import light from  '../image/light.jpeg'
import Live from  '../image/live.jpeg'
import bath from  '../image/bath.jpeg'
import ambulate from  '../image/ambulate.jpeg'
import position from  '../image/position.jpeg'
import toilet from  '../image/toilet.jpeg'
import incon from  '../image/incon.jpeg'
import Footer from './Footer'
function Service() {
  return (
   <div>
        <div className='old text-b-600'>
           
          <div className='flex flex-col md:flex-row-reverse md:space-x-16 md:items-center text-center text-2xl md:text-center'>
                  <div className='mx-auto w-1/2'> 
                    <Image src={Nurse} alt='nurse' className='w-full' />
                  </div>
                    <p className='text-3xl mt-8'>
                      Best caregiving services available <br /> We are committed to <br /> provide high quality <br /> client-centered services
                    </p>
              </div>
              <h1 className='text-5xl text-center mt-10 text-orange-300'>Services offered</h1>

              <p className='text-center font-bold'> Companion services</p>


              <div className=' '>
                   <div className=' flex gap-10 mx-auto justify-between w-[50vh] flex-col sm:flex sm:justify-center sm:mx-auto sm:w-4/5 sm:flex-wrap sm:flex-row-reverse mt-10'>
                      <div className='border bg-gray-100 p-10 border-orange-300 rounded-md text-center'>

                      <p className=' font-bold'> General companion care</p>
                      <Image src={Companion} className='mx-auto' alt='comp' />
                   </div>
                    <div className='border bg-gray-100 p-10 border-orange-300 rounded-md text-center'>

                      
                      <p className=' font-bold'>Medical reminders</p>
                      <Image src={reminders} className='mx-auto' alt='remind' />
                    </div>
                    <div className='border bg-gray-100 p-10 border-orange-300 rounded-md text-center'>
                      
                      <p className=' font-bold'>Meal preparation</p>
                      <Image src={meal}  className='mx-auto'alt='com' />
                    </div>
                    <div className='border bg-gray-100 p-10 border-orange-300 rounded-md text-center'>

                      <p className=' font-bold'>Grooming assistance</p>
                      <Image src={Groom}  className='mx-auto'alt='com' />
                    </div>
                    <div className='border bg-gray-100 p-10 border-orange-300 rounded-md text-center'>

                      <p className=' font-bold'>Transportation</p>
                      <Image src={transport}  className='mx-auto'alt='com' />
                    </div>
                    <div className='border bg-gray-100 p-10 border-orange-300 rounded-md text-center'>

                      <p className=' font-bold'>Errands</p>
                      <Image src={errands}  className='mx-auto'alt='com' />
                    </div>
                    <div className='border bg-gray-100 p-10 border-orange-300 rounded-md text-center'>

                      <p className=' font-bold'>Errands</p>
                      <Image src={light}  className='mx-auto'alt='com' />
                    </div>
                    <div className='border bg-gray-100 p-10 border-orange-300 rounded-md text-center'>

                      <p className=' font-bold'>Live-in services</p>
                      <Image src={Live}  className='mx-auto'alt='com' />
                    </div>
                
              </div>

               <h1 className='text-5xl text-center mt-10 text-orange-300 font-bold'>Personal Services</h1>

              </div>



                   
              <div className=' flex gap-10 mx-auto justify-between w-[50vh] flex-col sm:flex sm:justify-center sm:mx-auto sm:w-4/5 sm:flex-wrap sm:flex-row-reverse mt-10'>
                    <div className='border bg-gray-100 p-10 border-orange-300 rounded-md text-center'>

                      <p className=' font-bold'>Bathing, dressing and grooming</p>
                      <Image src={bath}  className='mx-auto'alt='com' />
                    </div>
                    <div className='border bg-gray-100 p-10 border-orange-300 rounded-md text-center'>

                      <p className=' font-bold'>Ambulation assistance</p>
                      <Image src={ambulate}  className='mx-auto'alt='com' />
                    </div>
                    <div className='border bg-gray-100 p-10 border-orange-300 rounded-md text-center'>

                      <p className=' font-bold'>Transferring and positioning</p>
                      <Image src={position}  className='mx-auto'alt='com' />
                    </div>
                    <div className='border bg-gray-100 p-10 border-orange-300 rounded-md text-center'>

                      <p className=' font-bold'>Toileting</p>
                      <Image src={toilet}  className='mx-auto'alt='com' />
                    </div>
                    <div className='border bg-gray-100 p-10 border-orange-300 rounded-md text-center'>

                      <p className=' font-bold'>Incontinence</p>
                      <Image src={incon}  className='mx-auto'alt='com' />
                    </div>


              </div>
        </div>
        
    </div>
  )
}

export default Service







    
  