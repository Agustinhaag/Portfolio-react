import React from "react";
import MyProyects from "./MyProyects";
import { data } from "./proyects";

const Contentproyects = () => {
  return (
    <section id="proyect" className="proyects flex flex-col items-center h-full py-12">
      <h2>PROYECTOS</h2>
      <div className="contenedor-indicadores flex justify-end w-full">
        <div className="indicadores"></div>
      </div>
      <div className="contenedor-principal flex items-center relative w-full">
        <button id="flecha-izquierda" className="flecha-izquierda left-0">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className="contenedor-carrusel w-full py-5 overflow-hidden scroll-smooth">
          <div className="container-proyect flex flex-nowrap">
            {data.map((proyect) => (
              <MyProyects key={proyect.id} proyect={proyect} />
            ))}
          </div>
        </div>
        <button id="flecha-derecha" className="flecha-derecha right-0">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Contentproyects;
