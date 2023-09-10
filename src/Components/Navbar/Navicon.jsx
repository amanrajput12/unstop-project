import {useContext, useState} from 'react'
import Menu from './Menu'
import { Menucontext } from '../Context/MenuContext'
const Navicon = () => {
     const {menu,setMenu} = useContext(Menucontext)
     console.log('menu ',menu);
  return (

    <div>

        { menu ? 
          <Menu  value ={setMenu}/>
        :


        
        <div className={`flex  fixed top-0 z-50 w-screen bg-white max-w-screen-sm   transition-transform duration-300 ${menu ? '-translate-x-full' : '-translate-x-0'}`}>
            <div className='w-1/2'>
                <img className='w-20' src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg" alt="" />
            </div>
            <div className='flex justify-around w-1/2'>
                <img className='w-5 cursor-pointer' src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/chat_icon.svg" alt="" />
                <img   className='w-5 cursor-pointer' src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/notification_icon.svg" alt="" />
                <img className='w-5 cursor-pointer ' onClick={()=>setMenu(true)} src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/hamburger_icon.svg" alt="" />
            </div>
        </div>
}
    </div>
  )
}

export default Navicon