import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenuAlt3, HiOutlineX } from 'react-icons/hi';


export const MobileNavbar = () => {

  // Controlador del Navbar para abirse y cerrarse
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  // 
  return (
    <div className="md:hidden flex flex-col">
       <div onClick={handleNav} className='mt-2'> 
            {/* Cambio entre iconos */}
            { !nav? <HiMenuAlt3 size={25}/> : <HiOutlineX size={25}/>}
      </div>
      <div className={nav ? "bg-bg-page w-[60%] h-screen fixed right-0 top-[54px] shadow-lg shadow-black/100 transition duration-500 ease-in-out z-50": 'fixed right-[-100%] opacity-20'}>
        <div className="flex flex-col items-start mt-4 text-medium-text text-md "> 
              <NavLink className='mt-4 ml-10' to='/'>Sobre mi</NavLink>
              <NavLink className='mt-4 ml-10' to='resume'>Resumen</NavLink>
              <NavLink className='mt-4 ml-10' to='portfolio'>Portafolio</NavLink>
              <NavLink className='mt-4 ml-10' to='contact'>Contacto</NavLink>
              <NavLink className='mt-4 ml-10' to='packages'>Paquetes</NavLink>
        </div>  
      </div>
    </div>
  )
}
