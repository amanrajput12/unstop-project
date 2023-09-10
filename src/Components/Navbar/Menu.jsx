import React from 'react'
import { BsChevronDoubleLeft } from "react-icons/bs";
const Menu = ({value}) => {
  return (
    <div className='flex  flex-col text-white '>
        <div className='flex  flex-row items-center gap-5 p-3'>
        <BsChevronDoubleLeft  className=' cursor-pointer' onClick={()=>value(false)} />
        
        <p> Menu</p> 
     </div>
     <div className='flex flex-row  justify-center mb-6'>
        <button className='bg-[#1c4980]   hover:bg-[#3a81d7] hover:outline-none rounded-lg text-white font-semibold p-3     '>Host Events</button>
     </div>
     <div className='flex justify-center text-blue-300 p-3 hover:text-blue-600 hover:bg-emerald-300 cursor-pointer ml-5 mr-5 rounded-xl '>
        <p> For Employers </p>
     </div>
     <div  className='flex justify-center text-blue-300 p-3 hover:text-blue-600 hover:bg-emerald-300 cursor-pointer ml-5 mr-5 rounded-xl '>
        <p> Our Solutions </p>
     </div>
     <div  className='flex justify-center text-blue-300 p-3 hover:text-blue-600 hover:bg-emerald-300 cursor-pointer ml-5 mr-5 rounded-xl '>
        <p> Our Products </p>
     </div>
     <div  className='flex justify-center text-blue-300 p-3 hover:text-blue-600 hover:bg-emerald-300 cursor-pointer ml-5 mr-5 rounded-xl '>
        <p> Campus Hiring Meet 2023 </p>
     </div>
<div  className='flex justify-center text-blue-300 p-3 hover:text-blue-600 hover:bg-emerald-300 cursor-pointer ml-5 mr-5 rounded-xl '>
    <p> Clientele </p>
</div>
<div  className='flex justify-center text-blue-300 p-3 hover:text-blue-600 hover:bg-emerald-300 cursor-pointer ml-5 mr-5 rounded-xl '>
    <p> Client Case Studies </p>
</div>
<div  className='flex justify-center text-blue-300 p-3 hover:text-blue-600 hover:bg-emerald-300 cursor-pointer ml-5 mr-5 rounded-xl '>
    <p> Unstop Brand Ambassador Program </p>
</div>
<div  className='flex justify-center text-blue-300 p-3 hover:text-blue-600 hover:bg-emerald-300 cursor-pointer ml-5 mr-5 rounded-xl '>
    <p> Pricing </p>
</div>
<div  className='flex justify-center text-blue-300 p-3 hover:text-blue-600 hover:bg-emerald-300 cursor-pointer ml-5 mr-5 rounded-xl '>
    <p> Contact us </p>
</div>
<div  className='flex justify-center text-blue-300 p-3 hover:text-blue-600 hover:bg-emerald-300 cursor-pointer ml-5 mr-5 rounded-xl '>
    <p> Unstop Awards 2023 </p>
</div>
<div  className='flex justify-center text-blue-300 p-3 hover:text-blue-600 hover:bg-emerald-300 cursor-pointer ml-5 mr-5 rounded-xl '>
    <p> Online Quizzing Festival </p>
</div>
<div  className='flex justify-center text-blue-300 p-3 hover:text-blue-600 hover:bg-emerald-300 cursor-pointer ml-5 mr-5 rounded-xl '>
    <p> Partner With Us </p>
</div>
<div  className='flex justify-center text-blue-300 p-3 hover:text-blue-600 hover:bg-emerald-300 cursor-pointer ml-5 mr-5 rounded-xl '>
    <p> Partners </p>
</div>
<div  className='flex justify-center text-blue-300 p-3 hover:text-blue-600 hover:bg-emerald-300 cursor-pointer ml-5 mr-5 rounded-xl '>
    <p> Testimonials </p>
</div>
<div  className='flex justify-center text-blue-300 p-3 hover:text-blue-600 hover:bg-emerald-300 cursor-pointer ml-5 mr-5 rounded-xl '>
    <p> About us </p>
</div>
<div  className='flex justify-center text-blue-300 p-3 hover:text-blue-600 hover:bg-emerald-300 cursor-pointer ml-5 mr-5 rounded-xl '>
    <p> Careers </p>
</div>
<div  className='flex justify-center text-blue-300 p-3 hover:text-blue-600 hover:bg-emerald-300 cursor-pointer ml-5 mr-5 rounded-xl '>
    <p> FAQs </p>
</div>
<div  className='flex justify-center text-blue-300 p-3 hover:text-blue-600 hover:bg-emerald-300 cursor-pointer ml-5 mr-5 rounded-xl '>
    <p> Terms &amp; Conditions </p>
</div>
<div  className='flex justify-center text-blue-300 p-3 hover:text-blue-600 hover:bg-emerald-300 cursor-pointer ml-5 mr-5 rounded-xl '>
    <p> Privacy Policy </p>
</div>
    </div>
  )
}

export default Menu