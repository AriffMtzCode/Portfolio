import Logo from '../assets/logoBlue-1.png'
import { LaptopNavBar } from './LaptopNavBar';
import { MobileNavbar } from './MobileNavbar';

export const Navbar = () => {
  return (
    <div className='flex justify-between h-15 items-center static text-white'>
        <div className='flex items-center mt-2 md:mt-8'>
            <img className='mx-2 w-8' src={ Logo } alt='logo' />
            <p className='font-bold text-white w-auto'>Ariff<span className='font-normal'> Martínez</span></p>
        </div>
        <div>
            <MobileNavbar />
            <LaptopNavBar />
        </div>
    </div>
  )
}
