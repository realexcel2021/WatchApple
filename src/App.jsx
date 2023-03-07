import React, {useEffect} from 'react'
import Home from './Components/Home/Home'
import Features from './Components/Features/Features'
import Users from './Components/Users/Users'
import ScreenShot from './Components/ScreenShot/ScreenShot'
import Appstore from './Components/AppStore/Appstore'
import Contact from './Components/Contact/Contact'
import Social from './Components/Social/Social'
import NavBar from './Components/NavBar/NavBar'


function App() {

  return (    
        <div>
           <div className='sticky top-0 z-50'>
        <NavBar />
        </div>
        <div className='overflow-x-hidden'>
        <Home />
       <Features />
       <Users />
       <ScreenShot />
       <Appstore />
       <Contact />
       <Social />
        

    </div>
        </div>

  )
}

export default App