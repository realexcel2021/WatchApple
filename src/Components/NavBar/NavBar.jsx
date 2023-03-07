import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Logo from '../../Images/logo.png'
import { NavHashLink } from 'react-router-hash-link'
import MenuIcon from '@mui/icons-material/Menu';
import { Grid, Hidden, Drawer } from '@mui/material';

function NavBar() {
  const { hash } = useLocation();
  const [open, setOpen] = useState(false)

  const openState = () => {
    setOpen(false)
  }

  const confirmHash = (iHash) => iHash === hash;

  function delayLink(event, to) {
    event.preventDefault();
    setTimeout(() => {
      window.location.href = to;
    }, 500); // set the delay time in milliseconds here
  }
  return (
    <div className='bg-substitute align-middle'>
        <div className='flex mx-24 pt-10 sm:pt-5 pb-4 items-center space-x-0 justify-between sm:mx-5 lg:mx-10'>
               
               <img src={Logo} alt=''/>

                <div>
                <div className=' ic:hidden'>
                <MenuIcon sx={{fontSize : 50}} onClick={() => setOpen(true)}/>
                </div>
                <Grid>
                    <Hidden smUp>
                        <Drawer open={open} onClose={() => setOpen(false)} PaperProps={{
                          sx : {
                            width : 270,
                            backgroundColor : "rgba(38, 38, 38, 1)"
                          }
                        }}>
                          
                          <NavHashLink className='sm:text-xl sm:p-3 sm:uppercase sm:text-primary border-primary border sm:m-3' smoothe onClick={() => openState} to='/#home'>Home</NavHashLink>
                          <NavHashLink className='sm:text-xl sm:p-3 sm:uppercase sm:text-primary border-primary border sm:m-3'  to='/#features' onClick={openState}>Features</NavHashLink>
                          <NavHashLink onClick={openState} className='sm:text-xl sm:p-3 sm:uppercase sm:text-primary border-primary border sm:m-3'   to='/#testimonial'>Testimonial</NavHashLink>
                          <NavHashLink onClick={openState} className='sm:text-xl sm:p-3 sm:uppercase sm:text-primary border-primary border sm:m-3'  to='/#screenshot'>Screenshots</NavHashLink>
                          <NavHashLink onClick={() => openState} className='sm:text-xl sm:p-3 sm:uppercase sm:text-primary border-primary border sm:m-3'  to='/#contact'>Contact Us</NavHashLink>
                          <button className='px-2 py-2 uppercase text-primary bg-secondary rounded sm:mx-5 sm:my-5 sm:bg-black'>Downlaod</button>  
                          
                        </Drawer>
                    </Hidden>
                </Grid>
                <nav className='flex text-xl space-x-3 uppercase text-gray-600 items-center sm:hidden md:hidden'>
                        <NavHashLink style={ confirmHash("#home") ? {borderBottom : "2px solid black"} : null } smoothe onClick={(event) => delayLink(event, '#home')} to='/#home'>Home</NavHashLink>
                        <NavHashLink style={ confirmHash("#features") ? {borderBottom : "2px solid black"} : null }  to='/#features' onClick={(event) => delayLink(event, '#features')}>Features</NavHashLink>
                        <NavHashLink onClick={() => setOpen(false)} style={ confirmHash("#testimonial") ? {borderBottom : "2px solid black"} : null }  to='/#testimonial' >Testimonial</NavHashLink>
                        <NavHashLink style={ confirmHash("#screenshot") ? {borderBottom : "2px solid black"} : null }  to='/#screenshot'>Screenshots</NavHashLink>
                        <NavHashLink style={ confirmHash("#contact") ? {borderBottom : "2px solid black"} : null }  to='/#contact'>Contact Us</NavHashLink>
                        <button className='px-2 py-2 uppercase text-primary bg-secondary rounded'>Downlaod</button>
                   </nav>
                </div>
        </div>
    </div>
  )
}

export default NavBar