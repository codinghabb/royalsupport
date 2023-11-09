import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className=' bg-black p-20 text-white'>
            <h1 className='text-6xl mb text-center mb-5'>Contact information</h1>
                 <div className='flex justify-center flex-col md:flex-row items-center md:gap-10'>
                    <div>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.364457618008!2d-86.1258142!3d39.6640155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b5c84973ca133%3A0xcaa5a416a04a0b7f!2s26%20Van%20Dyke%20St%2C%20Indianapolis%2C%20IN%2046227%2C%20USA!5e0!3m2!1sen!2sng!4v1699144966284!5m2!1sen!2sng"
                          width="400"
                          height="350"
                          style={{ border: '0' }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                        
                    <div className='  font-semibold items-center text-center text-lg mt-8'>
                        
                        <div className='flex gap-4'>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                              <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                          </svg>
                             <p>463-270-3351</p>
                        </div>
                        <div className='flex gap-4'>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                              <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                          </svg>
                             <p>973-336-3413</p>
                        </div>
                        <div className='flex gap-4'>
                      
                             <p>royalhomecare544@gmail.com</p>
                        </div>






                        <div className='flex gap-0 mt-5'>
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-10">
                             <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                          </svg>
                             <p>26 Van Dyke Street
                                indianapolis, Indiana 46227</p>
                        </div>
                        
                    </div>
                  </div>

                    <form target="_blank" action="https://formsubmit.co/royalhomecare544@gmail.com" method="POST" className=''>
                      <div class="form-group" className='items-center md:flex md:justify-center'>
                        <div class="form-row flex flex-col mt-20">
                         <div class=" flex flex-col mb-10">
                  
                            <input type="text" name="name" class="form-control font-bold px-4  rounded-lg text-black border-b focus:outline-none py-2 " placeholder="Name" required />
                  
                          </div>
                         <div class=" flex flex-col mb-10">
                  
                              <input type="email" name="email" class="form-control  font-bold px-4  rounded-lg text-black border-b focus:outline-none  py-2 " placeholder="Email" required />
                         </div>
                        </div>
                       </div>
                      <div class="form-group items-center md:flex md:justify-center">
                          <textarea placeholder="Your Message" class="form-control border-b focus:outline-none  text-black w-[50vh] h-[20vh] py-2 mx-auto text-center" name="message" rows="9" required value={"Hello!"} ></textarea>
                      </div>

                         <button type="submit" className=" items-center md:flex md:justify-center mt-10 bg-white text-black m-auto px-4 hover:text-white-500 font-bold py-2 rounded-lg transition ease in out">Submit </button>
          </form>

          </footer>
           <p className='items-center md:flex md:justify-center'>© copyright  2023</p>
    </>
  )
}
