import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='px-4 py-2'>
            <img src={logo} alt="" className='w-[200px]' />
        </div>
        <div className='flex list-none gap-8 p-4 text-[20px] font-semibold '>
            <li className='cursor-pointer' >Home</li>
            <li className='cursor-pointer' >About Us</li>
            <li className='cursor-pointer' >Contact</li>
        </div>
    </div>
  )
}

export default Navbar