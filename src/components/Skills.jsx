import React, { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let skill = document.getElementById("skill");
      if (skill) {
        const posicion = window.scrollY;
        let html = document.getElementById("html");
        let js = document.getElementById("js");
        let db = document.getElementById("db");
        let node = document.getElementById("node");
        let posicionSkill = skill.getBoundingClientRect().top;
        if (posicion >= posicionSkill) {
          html.classList.add("progreso1");
          js.classList.add("progreso2");
          db.classList.add("progreso3");
          node.classList.add("progreso4");
        } else {
          html.classList.remove("progreso1");
          js.classList.remove("progreso2");
          db.classList.remove("progreso3");
          node.classList.remove("progreso4");
        }
      }
    });
  }, []);
  return (
    <section
      id="skill"
      className="habilidades flex flex-col w-full h-full items-center "
    >
      <h2>HABILIDADES</h2>
      <div className="container-skill flex flex-col w-full">
        <div className="container-hab ">
          <div className="skill ">
            <p>
              <span className="lista"></span>Html & Css
            </p>
            <span className="porcentaje">90%</span>
          </div>
          <div className="barra">
            <div id="html" className=""></div>
          </div>
        </div>
        <div className="container-hab">
          <div className="skill">
            <p>
              <span className="lista"></span>Javascript & Node
            </p>
            <span className="porcentaje">85%</span>
          </div>
          <div className="barra">
            <div id="js" className=""></div>
          </div>
        </div>
        <div className="container-hab">
          <div className="skill">
            <p>
              <span className="lista"></span>Base de datos: SQL/NOSQL
            </p>
            <span className="porcentaje">85%</span>
          </div>
          <div className="barra">
            <div id="db" className=""></div>
          </div>
        </div>
        <div className="container-hab">
          <div className="skill">
            <p>
              <span className="lista"></span>React & Next
            </p>
            <span className="porcentaje">75%</span>
          </div>
          <div className="barra">
            <div id="node" className=""></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
