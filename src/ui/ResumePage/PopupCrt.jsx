import {  motion } from "framer-motion"
import { HiOutlineX } from 'react-icons/hi';

import {gitCrt} from '../../assets/certifications'


export const PopupCrt = ({name = gitCrt, certifications= [], isOpenPopUp, setIsOpenPopUp}) => {


  const getCertificationByName = (nameCertification) => {
    return certifications.find(certification => certification.nameCertification === nameCertification);
  };

  const handlesetIsOpenPopUp = () => {
    setIsOpenPopUp(!isOpenPopUp)
  }
  

  const certification = getCertificationByName(name);




  console.log(certification)



  return (
    <motion.div className={isOpenPopUp?  "w-full h-[300px] border-4 border-bg-box rounded-lg bg-bg-page fixed top-32 z-40 transition-opacity duration-500 ease-in-out   " : 'fixed left-[-100px] opacity-50'} >
      <button onClick={handlesetIsOpenPopUp } className='ml-2 '>
            <HiOutlineX className="absolute" size={20} color={'#fff'}/>
      </button>
            <div className="flex justify-center items-center mt-8">
              { certification == undefined ? null : <img src={certification.certificate}alt="certificate" className="w-[80%] h-[80%]" /> }
            </div>
    </motion.div>
  )
}
