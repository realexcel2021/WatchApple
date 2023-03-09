import React from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';
import MicIcon from '@mui/icons-material/Mic';
import BigImage1 from '../../Images/awesome_feature.png'
import BigImage2 from '../../Images/themes_watch.png'
import ScrollAnimation from 'react-animate-on-scroll';


function Features() {
  return (
    <div className='relative'>
      <div className='mx-24 sm:mx-10' id='features'>
        <h1 className='mt-10 uppercase text-center text-5xl font-light text-gray-500 sm:text-2xl '> awesome <b className=' text-secondary'>features</b> </h1>
        <hr className=' border-secondary mt-6 mb-7 mx-auto max-w-[50px] text-center border-y-2'/>
    </div>

      <div className='mx-24 grid grid-cols-2 items-center space-x-60 my-6 sm:grid-cols-1 sm:mx-4 sm:items-center sm:space-x-20'>

      <div>
             <ScrollAnimation animateIn='fadeIn'>
             <h1 className='text-2xl mb-5'>SHARING, LISTENING AND MANY MORE...</h1>
              <p className='text-gray-400 '> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
             </ScrollAnimation>

              <div className='flex flex-row space-x-5 p-5 items-center'>
                  <ScrollAnimation animateIn='fadeIn'>
                  <div className='px-3 py-2 max-w-none border-2 rounded-full'>
                      <VideocamIcon sx={{fontSize : 60}} className=' text-secondary'/>
                  </div>
                  </ScrollAnimation>
                 <ScrollAnimation animateIn='fadeIn'>
                 <p className='text-gray-400'> 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                 </ScrollAnimation>
              </div>
              <div className='flex flex-row p-6 space-x-5 items-center'>
                  <div className='px-3 py-2 max-w-none border-2 rounded-full'>
                      <ScrollAnimation animateIn='fadeIn'>
                      <MicIcon sx={{fontSize : 60}}/>
                      </ScrollAnimation>
                  </div>
                  <ScrollAnimation animateIn='fadeIn'>
                  <p className='text-gray-400 '> 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  </ScrollAnimation>
      </div>
      </div>
      <ScrollAnimation animateIn='fadeIn'>
      <img src={BigImage1} alt=''/>
      </ScrollAnimation>
    </div>

      <div className='px-24 py-6 grid grid-cols-2 items-center bg-substitute my-6 sm:grid-cols-1 sm:px-5'>
          <ScrollAnimation animateIn='fadeIn'>
          <img className=' pl-24 sm:pl-12' src={BigImage1}/>
          </ScrollAnimation>
          <div className='flex flex-col sm:mt-10'>
              <ScrollAnimation animateIn='fadeIn'>
              <h1 className='text-2xl sm:text-xl'>ALL YOUR FAVORITES MUSIC & AUDIO IN ONE PLACE</h1>
              <p className='text-gray-400 '> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <p className='text-gray-400 '>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              </ScrollAnimation>
          </div>
      </div>

      <div className='mx-24 grid grid-cols-2 items-center space-x-60 my-6 sm:grid-cols-1 sm:px-3 sm:space-x-16 sm:mx-0'>
          <div className='flex flex-col sm:mt-10'>
              <ScrollAnimation animateIn='fadeIn'>
              <h1 className='text-2xl'>ALL YOUR FAVORITES MUSIC & AUDIO IN ONE PLACE</h1>
              <p className=' text-gray-400 '> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <p className='text-gray-400 '>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              </ScrollAnimation>
          </div>
          <ScrollAnimation animateIn='fadeIn'>
          <img className=' sm:mt-10' src={BigImage2} />
          </ScrollAnimation>
      </div>

    </div>
  )
}

export default Features