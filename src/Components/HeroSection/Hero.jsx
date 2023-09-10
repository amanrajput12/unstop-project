import React, { useContext, useState } from 'react'
import herodata from './Herodata'
import Requirement from './Requirement'
import { Menucontext } from '../Context/MenuContext'

const Hero = () => {
 const {menu,setMenu} = useContext(Menucontext)
    console.log('herodata',herodata)
  return (
    <div>
        
        {
            menu?
            '':
herodata.map((val)=>(
<div className='bg-gradient-to-l hover:bg-gradient-to-r hover:from-gray-600 hover:to-zinc-900  rounded-lg shadow-inner' key={val.id}>
    <div className='flex mt-10'>
    <div className='w-1/3 self-center  '>
    <img className='w-10' src={val.thumbnail} alt="" />
    </div>
    <div>
  <h2 className='font-semibold text-blue-400 brightness-200	 '>{val.h2}</h2>
  <p className='text-blue-200'>{val.p}</p>
  </div>
  </div>
 <Requirement  value={val.requirement} />

</div>    
)
)
        }
    </div>
  )
}

export default Hero