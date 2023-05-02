import { NavLink } from "react-router-dom"

export const LaptopNavBar = () => {
  return (
    <div className="ml-10 text-medium-text text-md hidden md:flex"> 
          <NavLink className='mr-5' to='/'>Sobre mi</NavLink>
          <NavLink className='mr-5' to='resume'>Resumen</NavLink>
          <NavLink className='mr-5' to='portfolio'>Portafolio</NavLink>
          <NavLink className='mr-5' to='contact'>Contacto</NavLink>
          <NavLink className='mr-5' to='packages'>Paquetes</NavLink>
    </div>
  )
}
