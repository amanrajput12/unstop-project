import { useState } from 'react'
import Navicon from './Components/Navbar/Navicon'
import Hero from './Components/HeroSection/Hero'
import Footer from './Components/FooterSection/Footer'
import { MenuProvider } from './Components/Context/MenuContext'
function App() {
 

  return (
      <MenuProvider>
    <div  className='max-w-sm bg-neutral-800  '>
   <Navicon/>
<Hero/>
<Footer/>
    </div>
</MenuProvider>
  )
}

export default App
