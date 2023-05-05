import { Footer } from "../ui/Footer";
import { Header } from "../ui/Header";

export const ResumePage = () => {
  return (
    <div className="w-full">
      <Header text="Resumen" />
      <section className="h-auto bg-bg-page">
        <p className="text-white text-xl font-semibold ml-8 mt-8">Educación</p>
        <hr className="w-10 border border-primary-color ml-8" />
        <div className="flex flex-col items-center mt-8">
          <div className="w-72 border-b border-l border-bg-box h-52">
            <div className="flex items-center mt-2">
              <p className="border-2 border-primary-color rounded-2xl w-12 p-1 text-xs text-center text-text-color mr-2 ml-[-0.5rem] bg-bg-footer">
                2021
              </p>
              <p className="text-medium-text text-xs ">Udemy Courses</p>
            </div>
            <div className="ml-12">
              <p className="text-sm text-white font-medium">
                Master en CSS:Responsive, SASS, Flexbox, Grid y Bootstrap
              </p>
              <p className="text-xs text-text-color leading-6">
                Aquí aprendí las bases de la maquetación web, así cómo
                diferentes Frameworks de CSS para facilitar el trabajo de
                diseñar y poder tener mejor calidad de código
              </p>
            </div>
          </div>
          <div className="w-72 border-b border-l border-bg-box h-52">
            <div className="flex items-center mt-2">
              <p className="border-2 border-primary-color rounded-2xl w-12 p-1 text-xs text-center text-text-color mr-2 ml-[-0.5rem] bg-bg-footer">
                2021
              </p>
              <p className="text-medium-text text-xs ">Udemy Courses</p>
            </div>
            <div className="ml-12">
              <p className="text-sm text-white font-medium">
                Git y Terminal de Comandos
              </p>
              <p className="text-xs text-text-color leading-6">
                Aprendí el uso de la terminal de comandos, además de como
                gestionar un proyecto usando Git para llevar un control de
                versiones y una documentación.
              </p>
            </div>
          </div>
          <div className="w-72 border-l border-bg-box h-52 mb-8">
            <div className="flex items-center mt-2">
              <p className="border-2 border-primary-color rounded-2xl w-12 p-1 text-xs text-center text-text-color mr-2 ml-[-0.5rem] bg-bg-footer">
                2020
              </p>
              <p className="text-medium-text text-xs ">Udemy Courses</p>
            </div>
            <div className="ml-12">
              <p className="text-sm text-white font-medium">
                JavaScript Moderno
              </p>
              <p className="text-xs text-text-color leading-6">
                Un curso donde aprendí la nueva sintaxis del ECMAScript. Además
                de las mejores prácticas en el código, para que sea intuitivo y
                escalable.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto bg-bg-page ">
        <p className="text-white text-xl font-semibold ml-8">Experiencia</p>
        <hr className="w-10 border border-primary-color ml-8" />
        <div className="flex flex-col items-center mt-8">
          <div className="w-72 border-b border-l border-bg-box h-52">
            <div className="flex items-center mt-2">
              <p className="border-2 border-primary-color rounded-2xl w-12 p-1 text-xs text-center text-text-color mr-2 ml-[-0.5rem] bg-bg-footer">
                2021
              </p>
              <p className="text-medium-text text-xs ">Agencia Digital</p>
            </div>
            <div className="ml-12">
              <p className="text-sm text-white font-medium">
                Junior Web Development
              </p>
              <p className="text-xs text-text-color leading-6">
                Estuve trabajando durante 1 año en una Agencia de Marketing
                Digital como Desarrollador Web Junior, con tecnologías como:
                Wordpress, Woocomerce, HTML, CSS y JavaScript
              </p>
            </div>
          </div>
          <div className="w-72 border-b border-l border-bg-box h-52">
            <div className="flex items-center mt-2">
              <p className="border-2 border-primary-color rounded-2xl w-12 p-1 text-xs text-center text-text-color mr-2 ml-[-0.5rem] bg-bg-footer">
                2021
              </p>
              <p className="text-medium-text text-xs ">Freelancer</p>
            </div>
            <div className="ml-12">
              <p className="text-sm text-white font-medium">UI Designer</p>
              <p className="text-xs text-text-color leading-6">
                Como FreeLancer estuve en proyectos donde requerían solo el
                diseño de las interfaces además de diseños extras como logos,
                banner etc. con tecnologías como: Photoshop, Ilustrador, Premier
                Pro.
              </p>
            </div>
          </div>
          <div className="w-72 border-l border-bg-box h-52 mb-8">
            <div className="flex items-center mt-2">
              <p className="border-2 border-primary-color rounded-2xl w-12 p-1 text-xs text-center text-text-color mr-2 ml-[-0.5rem] bg-bg-footer">
                2021
              </p>
              <p className="text-medium-text text-xs ">Agencia Digital</p>
            </div>
            <div className="ml-12">
              <p className="text-sm text-white font-medium">SEO</p>
              <p className="text-xs text-text-color leading-6">
                Un rol importante que también tuve fue optimizar todos los
                sitios webs para el motor de búsqueda consiguiendo mayor
                visualización.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
