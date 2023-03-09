import React from 'react'
import Picture from '../../Images/iphone_aap_store_watch.png'
import Icon from '../../Images/iphone_download_icon.png'
import ScrollAnimation from 'react-animate-on-scroll';

function Appstore() {
  return (
    <div className=' bg-substitute mt-10 grid grid-cols-2 items-center sm:grid-cols-1'>

        <div className='px-24 sm:px-3'>
           <ScrollAnimation  animateIn='fadeIn'>
                <h1 className=' capitalize my-3 text-3xl font-thin'> Available on the app store </h1>
                  <div className='sm:mb-5 flex py-3 text-white text-xl bg-secondary space-x-4 w-max items-center px-9 rounded cursor-pointer transform hover:translate-y-3 duration-300'>
                      <img src={Icon} alt=''/>
                      <p>Download</p>
                  </div>
           </ScrollAnimation>
        </div>

        <div>
            <ScrollAnimation  animateIn='fadeIn'>
                <img src={Picture}/>
            </ScrollAnimation>
        </div>
    </div>
  )
}

export default Appstore