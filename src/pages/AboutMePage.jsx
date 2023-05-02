import MyPhoto from '../assets/me.png'
import { Button } from '../components/Button'
import { HiOutlinePencil, HiOutlineDesktopComputer, HiOutlineSearch, HiOutlineSpeakerphone, HiOutlineHeart, HiOutlineClock, HiOutlineStar } from 'react-icons/hi';
import { BiCoffeeTogo } from 'react-icons/bi'
import { Footer } from '../ui/Footer';

export const AboutMePage = () => {
  return (
    <div className='h-screen bg-bg-page'>
      <section className='flex flex-col items-center h-full mt-14'>
        <div className='bg-[#434344] w-[221px] h-2/6 rounded-full flex justify-center items-center shadow-2xl shadow-black'>
            <img src={MyPhoto} alt="a" width={180}/> 
        </div>
        <div className='flex flex-col items-center mt-10 w-4/6 text-justify'>
          <p className='text-medium-text text-sm mb-2'>Frontend-Developer</p>
          <h1 className='text-bg-text font-medium text-4xl mb-6'>Ariff Martínez</h1>
          <p className='text-text-color text-sm'>Hola, soy Ariff Martínez, un Frontend Developer de la Ciudad de México. Me apasiona el desarrollo web y estoy comprometido a ayudar a las personas a alcanzar sus objetivos. </p>
          <span className='text-primary-color text-sm'>
            Estoy listo para trabajar contigo en tu próximo proyecto.
          </span>
          <Button text='Download CV' borderColor='border-primary-color' borderWidth='border-2'/>
          <Button text='Contacto' borderColor='border-white' borderWidth='border-2'/>
        </div>
      </section>
      <section className='h-screen bg-bg-page'>
        <p className='text-white text-lg font-medium ml-8'>Lo que hago</p>
        <hr className='w-10 border border-primary-color ml-8'/>
        <div className='flex flex-col items-center mt-8'>
          <div className='flex w-4/6'>
            <div>
              <HiOutlinePencil size={40} color='#2196F3' className='mr-4'/>
            </div>
            <div>
            <p className='text-white font-medium'>Copywrite</p>
            <p className='text-text-color text-xs leading-5'>Con mi experiencia en copywriting, puedo ayudarte a crear el mensaje perfecto que se adapte a tus necesidades y objetivos.</p>
            </div>
          </div>
          <div className='flex w-4/6 mt-4'>
            <div>
              <HiOutlineDesktopComputer size={40} color='#2196F3' className='mr-4'/>
            </div>
            <div>
            <p className='text-white font-medium'>Web Design </p>
            <p className='text-text-color text-xs leading-5'>Ofrezco mi experiencia en diseño web para mejorar tu presencia en línea con un sitio atractivo y profesional que refleje tu marca..</p>
            </div>
          </div>
          <div className='flex w-4/6 mt-4'>
            <div>
              <HiOutlineSearch size={40} color='#2196F3' className='mr-4'/>
            </div>
            <div>
            <p className='text-white font-semibold'>Seo </p>
            <p className='text-text-color text-xs leading-5'>Puedo ayudarte a mejorar tu visibilidad en línea y alcanzar tus objetivos de negocio con mi experiencia en SEO.</p>
            </div>
          </div>
          <div className='flex w-4/6 mt-4'>
            <div>
              <HiOutlineSpeakerphone size={40} color='#2196F3' className='mr-4'/>
            </div>
            <div>
              <p className='text-white font-semibold'>Marketing</p>
              <p className='text-text-color text-xs leading-5'>Con mi experiencia en marketing, puedo ayudarte a aumentar tus ventas y visibilidad en línea mediante técnicas avanzadas. </p>
            </div>
          </div>
        </div>
      </section>
      <section className='h-auto bg-bg-page pb-8'>
        <p className='text-white text-lg font-semibold ml-8'>Fun Facts</p>
        <hr className='w-10 border border-primary-color ml-8'/>
        <div className='flex flex-col items-center'>
          <div className='border-2 border-box-border h-[200px] w-3/4 rounded-lg bg-bg-box mt-8 flex flex-col items-center justify-center'>
              <HiOutlineHeart size={40} color='#2196F3'/>
              <p className='font-semibold text-white'>Clientes Felices</p>
              <p className='text-5xl text-text-color'>22</p>
          </div>
          <div className='border-2 border-box-border h-[200px] w-3/4 rounded-lg bg-bg-box mt-4 flex flex-col items-center justify-center'>
              <HiOutlineClock size={40} color='#2196F3'/>
              <p className='font-semibold text-white'>Horas Trabajando</p>
              <p className='text-5xl text-text-color'>1,216</p>
          </div>
          <div className='border-2 border-box-border h-[200px] w-3/4 rounded-lg bg-bg-box mt-4 flex flex-col items-center justify-center'>
            <HiOutlineStar size={40} color='#2196F3'/>
            <p className='font-semibold text-white'>Certificaciones</p>
              <p className='text-5xl text-text-color'>8</p>
          </div>
          <div className='border-2 border-box-border h-[200px] w-3/4 rounded-lg bg-bg-box mt-4 flex flex-col items-center justify-center'>
            <BiCoffeeTogo size={40} color='#2196F3'/>
            <p className='font-medium text-white'>Cafés Tomados</p>
              <p className='text-5xl text-text-color'>324</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
