import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    let menu = document.getElementById("menu");
    let mostrar = document.getElementById("mostrar");
    let cerrar = document.getElementById("cerrar");
    let enlaces = document.querySelectorAll("nav a[to^='#']" || "#github");

    mostrar.addEventListener("click", () => {
      menu.classList.add("visible");
      menu.style.transition = "0.6s";
    });
    cerrar.addEventListener("click", () => {
      menu.classList.remove("visible");
    });
    enlaces.forEach((enlace) => {
      enlace.addEventListener("click", () => {
        menu.classList.toggle("visible");
      });
    });
  }, []);

  return (
    <header>
      <div className="container-head">| AH |</div>
      <span id="mostrar" className="hamb">
        <i className="fa-solid fa-bars"></i>
      </span>
      <nav id="menu">
        <Link to="/user">
          Sobre mi<span className="enl"></span>
        </Link>
        <a href="#servicio">
          Servicios<span className="enl"></span>
        </a>
        <Link to="/github" id="github">
           Github<span className="enl"></span>
        </Link>
        <a href="#proyect">
          Portafolio<span className="enl"></span>
        </a>
        <a href="#contact">
          Contacto<span className="enl"></span>
        </a>
        <span id="cerrar" className="close">
          <i className="fa-solid fa-x"></i>
        </span>
      </nav>
      <div className="contacto">
        <Link to="https://www.instagram.com/agushaag22/">
          <i className="fa-brands fa-instagram"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/agustin-gerardo-haag-letterucci-8a6546225/">
          <i className="fa-brands fa-linkedin"></i>
        </Link>
        <Link to="mailto:agustin-haag@hotmail.com">
          <i className="fa-solid fa-envelope"></i>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
