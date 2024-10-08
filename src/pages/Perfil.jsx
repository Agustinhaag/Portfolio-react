import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Skills from "../components/Skills";
import Form from "../components/Form";
import Contentproyects from "../components/Contentproyects";
import { Link } from "react-router-dom";
import { useDarkMode } from "../context/ModeContext";
import Services from "../components/Services";
import InfoUser from "../components/InfoUser";

const Perfil = () => {
  const el = useRef(null);
  const { mode } = useDarkMode();

  useEffect(() => {
    let fila = document.querySelector(".contenedor-carrusel");

    let derecha = document.getElementById("flecha-derecha");
    let izquierda = document.getElementById("flecha-izquierda");

    derecha.addEventListener("click", () => {
      fila.scrollLeft += fila.offsetWidth;
      let indicadoractivo = document.querySelector(".indicadores .activo");
      if (indicadoractivo && indicadoractivo.nextElementSibling) {
        indicadoractivo.nextElementSibling.classList.add("activo");
        indicadoractivo.classList.remove("activo");
      }
    });

    izquierda.addEventListener("click", () => {
      fila.scrollLeft -= fila.offsetWidth;
      let indicadoractivo = document.querySelector(".indicadores .activo");
      if (indicadoractivo && indicadoractivo.previousElementSibling) {
        indicadoractivo.previousElementSibling.classList.add("activo");
        indicadoractivo.classList.remove("activo");
      }
    });
  }, []);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<p >Hola, soy <i >Agustin Haag</i> Fullstack developer. <br/> Los invito a conocer un poco sobre mi </p>",
      ],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
  
      <main className="pt-24">
        <section
          id="yo"
          className="relative flex flex-col items-center h-full   text-white bg-cover banner"
          style={{
            backgroundImage: "url(/file/banner.png)",
            backgroundPosition: "center",
          }}
        >
          <div className="relative flex flex-col items-center text-center container-banner">
            <h3 className="mb-8 text-3xl mt-11">¡Bienvenidos!</h3>
            <span ref={el} />
            <Link
              to="https://github.com/Agustinhaag"
              className="px-8 py-3 text-white transition duration-300 border rounded-lg mb-14 bg-none border-customPink hover:bg-customPink"
            >
              PORTAFOLIO
            </Link>
          </div>
        </section>
       <InfoUser mode={mode}/>
       <Services mode={mode}/>
        <Skills />
        <Contentproyects />
        <Form />
      </main>
     
    </div>
  );
};

export default Perfil;
