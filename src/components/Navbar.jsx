import React, { useState } from 'react'
import { ImContrast } from 'react-icons/im';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ThemeToggle from './ThemeToggle';


const Navbar = () => {
    const [nav, setnav] = useState(false);

    const handleNav=()=>{
        setnav(!nav);
    }
  return (
    <div className='flex justify-between items-center space-x-4 h-[56px] py-4 shadow-md md:max-w-5xl mx-auto '>
        <span> Navbar</span>
        <div className='hidden md:block '>
            <ul className='flex justify-center items-center '>
                <li className='px-7'>HOME</li>
                <li className='px-7'>ABOUTS US</li>
                <li className='px-7'>CONTACT</li>
                <div> <ThemeToggle/></div>
            </ul>
            
        </div>
        <div onClick={handleNav} className='block md:hidden cursor-pointer pr-4 '>
           {nav ? (<AiOutlineClose/>):(<AiOutlineMenu/>)} 
        </div>
       
        <div className={ nav ?  'md:hidden fixed right-0 top-20   w-200 border-l-4 px-20 h-screen ease-in duration-300 z-50 bg-white '
        : 'fixed right-[-100%] top-20 ease-in duration-300 ' }>
            <ul className=' flex  flex-col space-y-8 '>
                <li className=' border-b-2'>HOME</li>
                <li className='border-b-2'>ABOUTS US</li>
                <li className='border-b-2 '>CONTACT</li>
                <ImContrast/>
            </ul>
        </div>
    </div>
  )
}

export default Navbar