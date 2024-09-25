import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import SwitchButton from "./SwitchButton";
import { useDarkMode } from "../context/ModeContext";

const Navbar = () => {


  const {mode} = useDarkMode()

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
    <header className={mode ? "flex items-center justify-between fixed px-2.5 bg-customHeader h-4 w-full z-50": "flex items-center justify-between fixed px-2.5 bg-customHeaderTransp  h-4 w-full z-50"}>
      <div className="text-3xl italic text-customPink">| AH |</div>
     
      <nav id="menu" className="flex items-center justify-between ml-4 text-center min-w-[105px]">
        <Link to="/">
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
      
      <span id="mostrar" className="hamb">
        <i className="fa-solid fa-bars"></i>
      </span>
      <div className="flex items-center">
        <div className="flex gap-1 mr-5 cont-mode">
      <i className="text-yellow-300 fa-regular fa-sun fo"></i><SwitchButton/>
      <i className="fa-regular fa-moon text-slate-300"></i>
      </div> 
      
     
      <div className="contacto">
        <Link to="https://www.instagram.com/agushaag22/">
          <i className="text-red-600 fa-brands fa-instagram"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/agustin-gerardo-haag-letterucci-8a6546225/">
          <i className="text-blue-600 fa-brands fa-linkedin"></i>
        </Link>
        <Link to="mailto:agustin-haag@hotmail.com">
          <i className="fa-solid fa-envelope text-cyan-600"></i>
        </Link>
      </div>
      </div>
      
    </header>
  );
};

export default Navbar;
