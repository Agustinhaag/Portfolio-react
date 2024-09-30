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
        let git = document.getElementById("git");
        let react = document.getElementById("react");
        let node = document.getElementById("node");
        let google = document.getElementById("google");
        let posicionSkill = skill.getBoundingClientRect().top;
        if (posicion >= posicionSkill) {
          html.classList.add("progreso1");
          js.classList.add("progreso3");
          db.classList.add("progreso2");
          git.classList.add("progreso2");
          react.classList.add("progreso1");
          node.classList.add("progreso3");
          google.classList.add("progreso4");
        } else {
          html.classList.remove("progreso1");
          js.classList.remove("progreso3");
          db.classList.remove("progreso2");
          git.classList.remove("progreso2");
          react.classList.remove("progreso1");
          node.classList.remove("progreso3");
          google.classList.remove("progreso4");
        }
      }
    });
  }, []);
  return (
    <section
      id="skill"
      className="flex flex-col items-center w-full h-full pt-12 pb-5 bg-center habilidades"
    >
      <h2
        className="mb-10 text-xl text-white underline-offset-2"
        style={{ textDecoration: "2px underline rgb(112, 112, 112)" }}
      >
        HABILIDADES
      </h2>
      <div className="flex flex-col w-full ">
        <div className="w-1/2 mx-auto my-5 min-w-52">
          <div className="flex justify-between text-lg text-white ">
            <p>
              <span className="inline-block w-2 h-2 mr-5 bg-white rounded-full"></span>
              React & Next
            </p>
            <span className="porcentaje">90%</span>
          </div>
          <div className="w-full h-1 my-3 bg-neutral-400">
            <div id="react" className=""></div>
          </div>
        </div>
        <div className="w-1/2 mx-auto my-5 min-w-52">
          <div className="flex justify-between text-lg text-white ">
            <p>
              <span className="inline-block w-2 h-2 mr-5 bg-white rounded-full"></span>
              Html & Css
            </p>
            <span className="porcentaje">90%</span>
          </div>
          <div className="w-full h-1 my-3 bg-neutral-400">
            <div id="html" className=""></div>
          </div>
        </div>
        <div className="w-1/2 mx-auto my-5 min-w-52">
          <div className="flex justify-between text-lg text-white ">
            <p>
              <span className="inline-block w-2 h-2 mr-5 bg-white rounded-full"></span>
              Javascript & Typescript
            </p>
            <span className="porcentaje">85%</span>
          </div>
          <div className="w-full h-1 my-3 bg-neutral-400">
            <div id="js" className=""></div>
          </div>
        </div>
        <div className="w-1/2 mx-auto my-5 min-w-52">
          <div className="flex justify-between text-lg text-white ">
            <p>
              <span className="inline-block w-2 h-2 mr-5 bg-white rounded-full"></span>
              Node & Express
            </p>
            <span className="porcentaje">85%</span>
          </div>
          <div className="w-full h-1 my-3 bg-neutral-400">
            <div id="node" className=""></div>
          </div>
        </div>
        <div className="w-1/2 mx-auto my-5 min-w-52">
          <div className="flex justify-between text-lg text-white ">
            <p>
              <span className="inline-block w-2 h-2 mr-5 bg-white rounded-full"></span>
              Sql & NoSql
            </p>
            <span className="porcentaje">80%</span>
          </div>
          <div className="w-full h-1 my-3 bg-neutral-400">
            <div id="db" className=""></div>
          </div>
        </div>
        <div className="w-1/2 mx-auto my-5 min-w-52">
          <div className="flex justify-between text-lg text-white ">
            <p>
              <span className="inline-block w-2 h-2 mr-5 bg-white rounded-full"></span>
              Git & Github
            </p>
            <span className="porcentaje">80%</span>
          </div>
          <div className="w-full h-1 my-3 bg-neutral-400">
            <div id="git" className=""></div>
          </div>
        </div>
        <div className="w-1/2 mx-auto my-5 min-w-52">
          <div className="flex justify-between text-lg text-white ">
            <p>
              <span className="inline-block w-2 h-2 mr-5 bg-white rounded-full"></span>
              Cloud & Google
            </p>
            <span className="porcentaje">75%</span>
          </div>
          <div className="w-full h-1 my-3 bg-neutral-400">
            <div id="google" className=""></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
