import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ScrollAnimation from 'react-animate-on-scroll';

function Social() {

    const currentDate = new Date().getFullYear()
  return (
    
        <div className='py-16 px-24 bg-substitute sm:px-3'>
            <ScrollAnimation animateIn='flipInX'>
                <div className=' flex space-x-6 justify-center sm:space-x-0'>
            <FacebookRoundedIcon sx={{fontSize : 70}} className='text-face'/>
            <TwitterIcon sx={{fontSize : 70}} className='text-tweet'/>
            <InstagramIcon sx={{fontSize : 70}} className='text-insta'/>
            <PinterestIcon sx={{fontSize : 70}} className='text-pin'/>
            <RssFeedIcon sx={{fontSize : 70}} className='text-feed'/>
        
        </div>
        <p className='text-center text-gray-500 pt-10 sm:text-xs'>Copyright © {currentDate} Appe. All Rights Reserved.</p>
            </ScrollAnimation>
        </div>
  )
}

export default Social