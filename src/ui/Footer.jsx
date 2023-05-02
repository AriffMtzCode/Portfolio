import { NavLink } from "react-router-dom"

export const Footer = () => {
  return (
    <div className="bg-bg-footer h-24 flex flex-col items-center justify-center">
        <ul className="flex justify-center text-sm font-light text-[#ddd]/50 mb-4">
            <NavLink to='#' className='mr-6'>Twitter</NavLink>
            <NavLink to='#' className='mr-6'>Facebook</NavLink>
            <NavLink to='https://www.instagram.com/ariff.martinez.code/'>Instagram</NavLink>
        </ul>
        <p className="text-sm text-text-color">© 2022 All rights reserved. Ariff Martinez</p>
    </div>
  )
}
