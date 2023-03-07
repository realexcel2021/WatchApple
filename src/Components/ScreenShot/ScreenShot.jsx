import React from 'react'
import Images from './Screens'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Pagination, Navigation } from "swiper";


import "swiper/css/pagination";
import "swiper/css/navigation";

function ScreenShot() {

  return (
    <div className=' my-16 px-24 sm:px-3' id='screenshot'>
    <h1 className='uppercase text-4xl text-center sm:text-3xl'> app <b>ScreenShot</b> </h1>
    <hr className=' border-secondary mt-6 mb-7 mx-auto max-w-[50px] text-center border-y-2'/>

    <div className='sm:mx-10'>
    <Swiper
    className='py-16'
    slidesPerView={1}
    spaceBetween={5}
    loop={true}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination, Navigation]}
    breakpoints = {
     {
      639: {
        width: 639,
        slidesPerView : 2,
        spaceBetween : 30
      }
     }
    }
  >
    {Images.map(pic => ( 
           
                <SwiperSlide className='flex' key={pic.id}> <img src={pic.picture} alt=''/> </SwiperSlide>
            
        ))}
  </Swiper>
    </div>
</div>
  )
}

export default ScreenShot