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
    <header className={mode ? "flex items-center justify-between fixed px-2.5 bg-customHeader": "flex items-center justify-between fixed px-2.5 bg-customHeaderTransp"}>
      <div className="container-head italic">| AH |</div>
     
      <nav id="menu" className="flex text-center justify-between items-center ml-4">
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
        <div className="cont-mode flex gap-1 mr-5">
      <i className="fa-regular fa-sun text-yellow-300 fo"></i><SwitchButton/>
      <i className="fa-regular fa-moon text-slate-300"></i>
      </div> 
      
     
      <div className="contacto">
        <Link to="https://www.instagram.com/agushaag22/">
          <i className="fa-brands fa-instagram text-red-600"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/agustin-gerardo-haag-letterucci-8a6546225/">
          <i className="fa-brands fa-linkedin text-blue-600"></i>
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
