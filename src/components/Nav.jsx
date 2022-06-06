import React, { useState } from 'react'
import { MenuIcon, CloseIcon } from './icons.jsx'

function Nav() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      {/* Mobile Navigation */}
      <nav className='fixed text-primary-white z-[2] block md:hidden'>
        {!openMenu ? (
          <ul className='flex items-center relative py-10 px-5 w-screen md:hidden'>
            <li onClick={() => setOpenMenu(true)}>
              <MenuIcon />
            </li>
            <li className='absolute left-[50%] translate-x-[-50%] text-2xl tracking-wide '>
              room
            </li>
          </ul>
        ) : (
          <ul className='flex items-center font-bold py-10 px-5 gap-7 bg-primary-white text-primary-black w-screen'>
            <li className='mr-5' onClick={() => setOpenMenu(false)}>
              <CloseIcon className={'w-6 text-primary-dark-gray/50'} />
            </li>
            <li className='cursor-pointer hover:underline hover:underline-offset-8 '>
              home
            </li>
            <li className='cursor-pointer hover:underline hover:underline-offset-8 '>
              shop
            </li>
            <li className='cursor-pointer hover:underline hover:underline-offset-8 '>
              about
            </li>
            <li className='cursor-pointer hover:underline hover:underline-offset-8 '>
              contact
            </li>
          </ul>
        )}

        {/* Desktop Navigation */}
      </nav>
      <nav className='hidden md:block fixed text-primary-white z-[2]'>
        <ul className='flex items-center font-semibold py-10 px-12 gap-8 w-screen'>
          <li className='text-2xl tracking-wide '>room</li>
          <li className='cursor-pointer hover:underline hover:underline-offset-8 '>
            home
          </li>
          <li className='cursor-pointer hover:underline hover:underline-offset-8 '>
            shop
          </li>
          <li className='cursor-pointer hover:underline hover:underline-offset-8 '>
            about
          </li>
          <li className='cursor-pointer hover:underline hover:underline-offset-8 '>
            contact
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
