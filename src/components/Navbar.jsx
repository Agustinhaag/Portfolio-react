import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import SwitchButton from "./SwitchButton";
import { useDarkMode } from "../context/ModeContext";
import PATHROUTES from "../helpers/pathroute";

const Navbar = () => {
  const { mode } = useDarkMode();

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
    <header
      className={`flex items-center justify-between fixed px-2.5 bg-black ${
        mode ? "bg-opacity-50" : "bg-opacity-85"
      } backdrop-blur-xl shadow-lg  h-24 w-full z-50`}
    >
      <div className="text-3xl italic text-customPink">| AH |</div>
      <nav
        id="menu"
        className="flex items-center  justify-between ml-4 text-center min-w-[200px]"
      >
        <Link to={PATHROUTES.HOME} className="link">
          Sobre mi
        </Link>
        <a href="/#servicio" className="link">
          Servicios
        </a>
        <Link to={PATHROUTES.GITHUB} id="github" className="link">
          Github
        </Link>
        <a href="/#proyect" className="link">
          Portafolio
        </a>
        <a href="/#contact" className="link">
          Contacto
        </a>

        <span id="cerrar" className="close">
          <i className="fa-solid fa-x"></i>
        </span>
      </nav>

      <span id="mostrar" className="hamb">
        <i className="fa-solid fa-bars"></i>
      </span>
      <div className="flex items-center">
        <div className="flex gap-1 mr-5 text-sm">
          <i className="text-yellow-300 fa-regular fa-sun fo"></i>
          <SwitchButton />
          <i className="fa-regular fa-moon text-slate-300"></i>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
