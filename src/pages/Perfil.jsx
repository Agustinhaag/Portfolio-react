import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Typed from "typed.js";
import Skills from "./components/Skills";
import Form from "./components/Form";
import Contentproyects from "./components/Contentproyects";
import { Link } from "react-router-dom";

const Perfil = () => {
  const el = useRef(null);

  

  useEffect(()=>{
    let fila = document.querySelector(".contenedor-carrusel");
    // let proyecto = document.querySelectorAll(".proyecto");
    let derecha = document.getElementById("flecha-derecha");
    let izquierda = document.getElementById("flecha-izquierda");

    // const numpag = 2;
    // for (let i = 0; i < numpag; i++) {
    //   const indicador = document.createElement("button");
    //   if (i === 0) {
    //     indicador.classList.add("activo");
    //   }

    //   document.querySelector(".indicadores").appendChild(indicador);
    //   indicador.addEventListener("click", (e) => {
    //     fila.scrollLeft = i * fila.offsetWidth;
    //     document
    //       .querySelector(".indicadores .activo")
    //       .classList.remove("activo");
    //     e.target.classList.add("activo");
    //   });
    // }

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
    
  },[])

  useEffect(() => {

    const typed = new Typed(el.current, {
      strings: [
        "<p>Hola, soy <i>Agustin Haag</i> Fullstack developer. <br/> Los invito a conocer un poco sobre mi </p>",
      ],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <section id="yo" className="banner">
          <div className="container-banner">
            <h3>Bienvenidos</h3>
            <span ref={el} />
            <Link to="https://github.com/Agustinhaag">PORTAFOLIO</Link>
          </div>
        </section>
        <section id="info" className="info">
          <div className="perfil">
            <img src="../file/perfil2.png" alt="" />
          </div>
          <div className="container-info">
            <h3>Sobre mi</h3>
            <p>
              Hola, soy <label>Agustin Haag</label>
            </p>
            <p>Fullstack developer</p>
            <p>
              Soy <span>FullStack developer Jr</span> y soy egresado de la
              Tecnicatura superior en programación. Poseo conocimientos en
              lenguajes como Javascript, NodeJs, React, next, Html, Css, Sql,
              nosql; además buen manejo de Apis y Json, Boostrap, responsive
              design, etc. Me considero una persona proactiva, responsable y
              ofrezco toda mi predisposición para los desafios que se me
              presenten. Si quieren saber mas los invito a ver mi CV, saludos!.
            </p>
            <div className="container-btn-info">
              <a
                href="../file/AGUSTIN HAAG-NUEVO.pdf.pdf"
                download="CV Agustin Haag"
              >
                Descargar CV
              </a>
            </div>
          </div>
        </section>
        <section id="servicio" className="services">
          <h2>MIS SERVICIOS</h2>
          <div className="container-services">
            <div className="primero">
              <div className="icon">
                <i className="fa-solid fa-code"></i>
              </div>
              <h4>Diseño de sitios web</h4>
              <span></span>
              <p>Html - Css - Javascript - Git - Github</p>
              <p>FrontEnd</p>
              <p>
                Elaboración de webs dinamicas o estaticas, 100% responsive y
                adaptable
              </p>
            </div>
            <div className="primero">
              <div className="icon">
                <i className="fa-brands fa-js"></i>
              </div>
              <h4>Manejo de Javascript/NodeJs</h4>
              <span></span>
              <p>React - Json - Express - Next</p>
              <p>FullStack</p>
              <p>
                Manejo de Javascript del lado del cliente y el servidor. Ademas
                de librerias y frameworks
              </p>
            </div>
            <div className="primero">
              <div className="icon">
                <i className="fa-brands fa-node"></i>
              </div>
              <h4>Administracion del servidor</h4>
              <span></span>
              <p>NodeJS - Express - Postman - Apis Rest - NPM</p>
              <p>BackEnd</p>
              <p>Operar con Apis, asincronia y manejo del servidor</p>
            </div>
            <div className="primero">
              <div className="icon">
                <i className="fa-solid fa-user-check"></i>
              </div>
              <h4>habilidades Blandas</h4>
              <span></span>
              <p>Desarrollo personal</p>
              <p>Trabajo en equipo - Adaptabilidad - Responsabilidad</p>
              <p>Aptitudes y actitudes que promueven un buen desempeño</p>
            </div>
            <div className="primero">
              <div className="icon">
                <i className="fa-solid fa-database"></i>
              </div>
              <h4>Manejo de Base de datos</h4>
              <span></span>
              <p>SQL & NOSQL</p>
              <p>PostgreSQL - MariaDB - MySQL - Firebase - Mongo</p>
              <p>Operación con bases relacionales y no relacionales</p>
            </div>
            <div className="primero">
              <div className="icon">
                <i className="fa-solid fa-mobile-screen-button"></i>
              </div>
              <h4>Diseño responsive</h4>
              <span></span>
              <p>CSS</p>
              <p>Flex - Grid - Boostrap- Tailwinds</p>
              <p>
                Diseño responsive totalmente adaptable a cualquier dispositivo
              </p>
            </div>
          </div>
        </section>
        <Skills />
        <Contentproyects />
        <Form />
      </main>
      <Footer />
    </div>
  );
};

export default Perfil;
