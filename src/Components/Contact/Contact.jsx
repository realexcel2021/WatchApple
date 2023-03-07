import React from 'react'

function Contact() {
  return (
    <div className='px-24 py-20 sm:px-3' id='contact'>
        <h1 className='text-center uppercase text-4xl text-secondary'>
            contact <b>us</b>
        </h1>
        <hr className=' border-secondary mt-6 mb-7 mx-auto max-w-[50px] text-center border-y-2'/>
        <p className='text-center text-secondary'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <div className='flex space-x-10 mx-32 my-10 sm:block sm:mx-3 sm:space-x-0'>
            <input type='text' placeholder='Your Name*' className='block border h-12 w-full p-5 focus:outline-none shadow'/>
            <input type='text' placeholder='Your Email*' className='block border h-12 w-full p-5 focus:outline-none shadow sm:my-5'/>
        </div>
        <div className='mx-32 text-center sm:mx-3'>
        <textarea rows={4} className='mx-auto border shadow w-full p-5' placeholder='Your Message'/>
        <button className='my-5 uppercase px-8 py-4 bg-secondary text-primary text-xl hover:bg-primary hover:text-secondary transform duration-300 border-secondary border-2 rounded'> send Message  &gt; </button>
        </div>
        

    </div>
  )
}
export default Contact