import { HiOutlineCode } from "react-icons/hi";
import { AiOutlineHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiJavascript } from "react-icons/di";
import { BsTerminal } from "react-icons/bs";

import Github from "../../assets/certifications/githubCertification.jpg";
import HtmlP1 from "../../assets/certifications/htmlP1.jpg";
import HtmlP2 from "../../assets/certifications/htmlP2.jpg";
import HtmlP3 from "../../assets/certifications/htmlP3.jpg";
import HtmlP4 from "../../assets/certifications/htmlP4.jpg";
import LogicConcepts from "../../assets/certifications/logicaConceptosPrimordiales.jpg";
import LogicPractice from "../../assets/certifications/logicaPracticandoConJuegosAnimaciones.jpg";
import LogicSteps from "../../assets/certifications/logicaPrimerosPasos.jpg";
import MasterCSS from "../../assets/certifications/masterCSS.jpg";
import JSModerno from "../../assets/certifications/jsModerno.jpg";
import TerminalComands from "../../assets/certifications/terminal.jpg";


const certifications = [
  {
    nameCertification: "Lógica de programación - Primeros Pasos",
    organization: "Alura",
    finishDate: "05 de abril de 2023",
    icon: <HiOutlineCode size={40} color={"#2196F3"} />,
    image: Github,
  },
  {
    nameCertification:
      "Lógica de programación: Practicando con juegos y animaciones",
    organization: "Alura",
    finishDate: "06 de abril de 2023",
    icon: <HiOutlineCode size={40} color={"#2196F3"} />,
    image: HtmlP1,
  },
  {
    nameCertification: "Lógica de programación: coceptos primordiales",
    organization: "Alura",
    finishDate: "05 de abril de 2023",
    icon: <HiOutlineCode size={40} color={"#2196F3"} />,
    image: HtmlP2,
  },
  {
    nameCertification: "HTML5 y CSS3 parte 1: Mi primera página web",
    organization: "Alura",
    finishDate: "06 de abril de 2023",
    icon: <AiOutlineHtml5 size={40} color={"#2196F3"} />,
    image: HtmlP3,
  },
  {
    nameCertification:
      "HTML5 y CSS3 parte 2: Posicionamiento, listas y navegación",
    organization: "Alura",
    finishDate: "07 de abril de 2023",
    icon: <AiOutlineHtml5 size={40} color={"#2196F3"} />,
    image: HtmlP4,
  },
  {
    nameCertification:
      "HTML5 y CSS3 parte 3: Trabajando con formularios y tablas",
    organization: "Alura",
    finishDate: "07 de abril de 2023",
    icon: <AiOutlineHtml5 size={40} color={"#2196F3"} />,
    image: LogicConcepts,
  },
  {
    nameCertification: "HTML5 y CSS3 parte 4: Avanzando en CSS",
    organization: "Alura",
    finishDate: "07 de abril de 2023",
    icon: <AiOutlineHtml5 size={40} color={"#2196F3"} />,
    image: LogicPractice,
  },
  {
    nameCertification: "GIT y GITHUB: Controle y comparta su código",
    organization: "Alura",
    finishDate: "10 de abril de 2023",
    icon: <AiFillGithub size={40} color={"#2196F3"} />,
    image: LogicSteps,
  },
  {
    nameCertification:
      "Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap",
    organization: "Udemy Courses",
    finishDate: "21 de Octubre de 2021",
    icon: <DiCss3 size={40} color={"#2196F3"} />,
    image: MasterCSS,
  },
  {
    nameCertification:
      "Curso de Git y la Terminal de comandos - Para programadores",
    organization: "Udemy Courses",
    finishDate: "10 de abril de 2023",
    icon: <BsTerminal size={40} color={"#2196F3"} />,
    image: TerminalComands,
  },
  {
    nameCertification: "JavaScript Moderno: Guia para dominar el lenguaje   ",
    organization: "Udemy Courses",
    finishDate: "2 de Mayo de 2023",
    icon: <DiJavascript size={40} color={"#2196F3"} />,
    image: JSModerno,
  },
];

export const Gallery = () => {
  return (
    <div className="flex mt-8 relative">
      {certifications.map(
        ({ nameCertification, finishDate, organization, icon, image }) => (
          <div
            key={nameCertification}
            className="text-text-color w-[200px] h-[200px] flex justify-start  border-2 border-box-border rounded-lg  mb-4 m-4"
          >
            <div className="w-[100px] h-[200px] border-r-2 rounded-r-none rounded-lg border-box-border bg-bg-box flex items-center justify-center">
              {icon}
            </div>
            <div className="w-full h-full flex flex-col justify-center ml-4">
              <p className="text-sm text-white">{nameCertification}</p>
              <p className="text-medium-text text-xs mt-2">{finishDate}</p>
              <p className="text-medium-text text-xs">{organization}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};
