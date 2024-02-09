import React from "react";
import MyProyects from "./MyProyects";
import { data } from "./proyects";

const Contentproyects = () => {
  return (
    <section id="proyect" className="proyects">
      <h2>PROYECTOS</h2>
      <div className="contenedor-indicadores">
        <div className="indicadores"></div>
      </div>
      <div className="contenedor-principal">
        <button id="flecha-izquierda" className="flecha-izquierda">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className="contenedor-carrusel">
          <div className="container-proyect">
            {data.map((proyect) => (
              <MyProyects key={proyect.id} proyect={proyect} />
            ))}
          </div>
        </div>
        <button id="flecha-derecha" className="flecha-derecha">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Contentproyects;
