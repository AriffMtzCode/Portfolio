import { motion } from "framer-motion";

import { HiOutlineCode } from "react-icons/hi";
import { AiOutlineHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiJavascript } from "react-icons/di";
import { BsTerminal } from "react-icons/bs";
import { PopupCrt } from "./PopupCrt";
import {
  gitCrt,
  htmlP1Crt,
  htmlP2Crt,
  htmlP3Crt,
  htmlP4Crt,
  jsCrt,
  logicAnimaCrt,
  logicConceptsCrt,
  logicStepsCrt,
  masterCrt,
  terminalCrt,
} from "../../assets/certifications";
import { useState } from "react";

export const certifications = [
  {
    nameCertification: "Lógica de programación - Primeros Pasos",
    organization: "Alura",
    finishDate: "05 de abril de 2023",
    icon: <HiOutlineCode size={40} color={"#2196F3"} />,
    certificate: logicStepsCrt,
  },
  {
    nameCertification:
      "Lógica de programación: Practicando con juegos y animaciones",
    organization: "Alura",
    finishDate: "06 de abril de 2023",
    icon: <HiOutlineCode size={40} color={"#2196F3"} />,
    certificate: logicAnimaCrt,
  },
  {
    nameCertification: "Lógica de programación: coceptos primordiales",
    organization: "Alura",
    finishDate: "05 de abril de 2023",
    icon: <HiOutlineCode size={40} color={"#2196F3"} />,
    certificate: logicConceptsCrt,
  },
  {
    nameCertification: "HTML5 y CSS3 parte 1: Mi primera página web",
    organization: "Alura",
    finishDate: "06 de abril de 2023",
    icon: <AiOutlineHtml5 size={40} color={"#2196F3"} />,
    certificate: htmlP1Crt,
  },
  {
    nameCertification:
      "HTML5 y CSS3 parte 2: Posicionamiento, listas y navegación",
    organization: "Alura",
    finishDate: "07 de abril de 2023",
    icon: <AiOutlineHtml5 size={40} color={"#2196F3"} />,
    certificate: htmlP2Crt,
  },
  {
    nameCertification:
      "HTML5 y CSS3 parte 3: Trabajando con formularios y tablas",
    organization: "Alura",
    finishDate: "07 de abril de 2023",
    icon: <AiOutlineHtml5 size={40} color={"#2196F3"} />,
    certificate: htmlP3Crt,
  },
  {
    nameCertification: "HTML5 y CSS3 parte 4: Avanzando en CSS",
    organization: "Alura",
    finishDate: "07 de abril de 2023",
    icon: <AiOutlineHtml5 size={40} color={"#2196F3"} />,
    certificate: htmlP4Crt,
  },
  {
    nameCertification: "GIT y GITHUB: Controle y comparta su código",
    organization: "Alura",
    finishDate: "10 de abril de 2023",
    icon: <AiFillGithub size={40} color={"#2196F3"} />,
    certificate: gitCrt,
  },
  {
    nameCertification:
      "Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap",
    organization: "Udemy Courses",
    finishDate: "21 de Octubre de 2021",
    icon: <DiCss3 size={40} color={"#2196F3"} />,
    certificate: masterCrt,
  },
  {
    nameCertification:
      "Curso de Git y la Terminal de comandos - Para programadores",
    organization: "Udemy Courses",
    finishDate: "10 de abril de 2023",
    icon: <BsTerminal size={40} color={"#2196F3"} />,
    certificate: terminalCrt,
  },
  {
    nameCertification: "JavaScript Moderno: Guia para dominar el lenguaje   ",
    organization: "Udemy Courses",
    finishDate: "2 de Mayo de 2023",
    icon: <DiJavascript size={40} color={"#2196F3"} />,
    certificate: jsCrt,
  },
];

export const SliderCrt = () => {

    const [isOpenPopUp, setIsOpenPopUp] = useState(false)
    const [cert, setCert] = useState('')

    const handlePopup = (nameCertification) => {
        setCert(nameCertification)
        setIsOpenPopUp(true)
    }

    const statePopup = () => {
      console.log(isOpenPopUp)
    }

    statePopup()


    
    

  return (
    <motion.div className="bg-bg-page relative overflow-y-hidden overflow-x-hidden">
      <motion.div
        className="inline-flex mb-8"
        drag="x"
        dragConstraints={{ right: 0, left: -3526.44 }}
      >
        {certifications.map(
          ({ nameCertification, icon, finishDate, organization }) => (
            <motion.div
            onClick={() => handlePopup(nameCertification)}
              key={nameCertification}
              className="flex justify-center items-center w-[320px] h-[170px] ml-8 border-2 border-[#444] rounded-lg bg-bg-page"
            >
              <motion.div className="w-1/3 h-full flex items-center justify-center border-r-2 border-[#444] bg-bg-box">
                {icon}
              </motion.div>
              <motion.div className="w-2/3 flex flex-col justify-center ml-4 mr-1">
                <p className="text-bg-text text-base">{nameCertification}</p>
                <p className="text-xs text-medium-text">{organization}</p>
                <p className="text-xs text-medium-text">{finishDate}</p>
              </motion.div>
            </motion.div>
          )
        )}  
      </motion.div>
      <PopupCrt name={cert} certifications={certifications} isOpenPopUp={ isOpenPopUp } setIsOpenPopUp={setIsOpenPopUp}/>
      </motion.div>
  );
};
