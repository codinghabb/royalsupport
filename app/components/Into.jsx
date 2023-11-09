import React from 'react'

import { motion } from 'framer-motion'

function Into() {
  return (
    <>
      <motion.div className=' mx-auto' 
       animate={{y:"15vh",
         x: 50,
         opacity:1
        
      }}

       initial={{
         opacity: 0
       }}
       transition={{
          duration: 1,
           stiffness: 200
       }}
      >
          <h3 className='text-6xl'>Welcome to </h3>
          <h1 className=' text-5xl font-bold text-blue-600 mb-14'>Royal <span className=' text-green-500'>Support</span></h1>
          <p className=' text-3xl'>Home Care!</p>
          <h3 className=' font-bold'>We Offer a total diver range of Senior Care Services</h3>

       <motion.div className=' mt-10'>
          
         <a href="/home" className='bg-blue-600 rounnded rounded-lg px-7 text-white py-2'>Get started!!</a>
       </motion.div>
        
    </motion.div>




    
    </>
    
  )
}

export default Into