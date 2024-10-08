import React from "react";
import { data } from "../helpers/proyects";
import CardProyect from "./CardProyect";


const Proyects = () => {
  return (
    <section className="md:mr-4 mr-0 px-6 md:px-0">
      <h2 className="mt-2 mb-5 text-3xl">Mis proyectos</h2>
      <div className="grid gap-6 w-full grid-cols-1 md:grid-cols-2">
        {data.map((proyect) => (
         <CardProyect proyect={proyect}/>
        ))}
      </div>
    </section>
  );
};

export default Proyects;
