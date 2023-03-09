import React from 'react'
import Watch from '../../Images/ban_watch_dark_grey.png'

function Home() {
  return (
    <>
        <div className='px-24 bg-substitute md:px-3' id='home'>
          <div className='pt-16 grid grid-cols-2 gap-7 items-center mb-12 sm:grid-cols-1'>

              <div className=' items-center'>
                  <h1 className=' font-thin text-2xl text-secondary'>LOREM IPSUM DOLOR SIT</h1>
                  <h1 className='text-2xl font-semibold text-secondary'> CONSECTETUR ADIPISICING ELIT </h1>
                  <p className='text-gray-500 mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor voluptate velit esse cillum dolore eu fugiat incididunt ullamco.</p>
                  <button className='px-7 py-4 mt-6 bg-secondary text-primary rounded'>GET THE APP</button>
              </div>

              <div>
                  <img src={Watch} alt=''/>
              </div>
              
          </div>
      </div>
    </>
  )
}

export default Home