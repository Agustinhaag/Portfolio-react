import React from "react";
import MyProyects from "./MyProyects";
import { data } from "../helpers/proyects";

const Contentproyects = () => {
  return (
    <section
      id="proyect"
      className="flex flex-col items-center h-full py-12 proyects"
    >
      <h2
        className="mb-5 text-xl text-center underline-offset-2"
        style={{ textDecoration: "2px underline #f072e9" }}
      >
        PROYECTOS
      </h2>

      <div className="relative flex items-center w-full contenedor-principal">
        <button
          id="flecha-izquierda"
          style={{ top: "calc(50% -25%)", lineHeight: "40px" }}
          className="absolute left-0 z-50 text-2xl text-white duration-300 bg-black border-none rounded-tr rounded-br cursor-pointer bg-opacity-30 h-1/4 w-11 hover:bg-opacity-80 flecha-izquierda"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className="w-full py-5 overflow-hidden contenedor-carrusel scroll-smooth">
          <div className="flex container-proyect flex-nowrap">
            {data.map((proyect, index) => (
              <MyProyects key={proyect.id} proyect={proyect} index={index}/>
            ))}
          </div>
        </div>
        <button
          id="flecha-derecha"
          style={{ top: "calc(50% -25%)", lineHeight: "40px" }}
          className="absolute right-0 z-50 text-2xl text-white duration-300 bg-black border-none rounded-tl rounded-bl cursor-pointer bg-opacity-30 h-1/4 w-11 hover:bg-opacity-80 flecha-derecha"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Contentproyects;
