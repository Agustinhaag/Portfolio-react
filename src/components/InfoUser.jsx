import React, { useState } from "react";
import LanguageCv from "./LanguageCv";

const InfoUser = ({ mode }) => {
  const [language, setLanguage] = useState("Es");
  return (
    <section
      id="info"
      className="flex w-[95%] h-full mx-auto mt-10 info md:flex-row flex-col md:items-start items-center mb-7 gap-3"
    >
      <div className="flex items-center justify-center md:w-1/4 w-1/2  mb-12 bg-neutral-400 rounded-2xl min-h-48 md-h-auto h-[340px] min-w-72 perfil">
        <img
          src="../file/perfil2.png"
          alt="Agustin Haag"
          className="w-[90%] h-[90%] rounded"
        />
      </div>
      <div className="w-full mb-16 md:w-2/3 ">
        <p
          className="mb-5 text-2xl font-semibold custom:text-3xl"
          style={{ wordBreak: "4px" }}
        >
          Hola, soy <label className="text-customPink">Agustin Haag</label>
        </p>
        <p
          className={`${
            mode ? "text-white" : "text-customGray"
          } uppercase custom:text-xl text-lg mb-5`}
        >
          Fullstack developer
        </p>
        <p
          className={`${
            mode ? "text-white" : "text-customGray"
          } custom:text-xl text-base w-11/12 mb-10`}
          style={{ lineHeight: "30px", wordSpacing: "3px" }}
        >
          Soy
          <span
            className={
              mode
                ? "text-customPink font-semibold px-[6px]"
                : "text-customGray font-semibold"
            }
          >
            FullStack developer Jr
          </span>
          y soy egresado de la Tecnicatura superior en programación. Poseo
          conocimientos en lenguajes como Javascript, NodeJs, React, next, Html,
          Css, Sql, nosql; además buen manejo de Apis y Json, Boostrap,
          responsive design, etc. Me considero una persona proactiva,
          responsable y ofrezco toda mi predisposición para los desafios que se
          me presenten. Si quieren saber mas los invito a ver mi CV, saludos!.
        </p>
        <div className="flex flex-col justify-center w-full gap-2 sm:flex-row">
          <a
            href={`../file/${
              language === "Es" ? "Agustin Haag.pdf" : "CVingles.pdf"
            }`}
            download="CV Agustin Haag"
            className="w-4/5 px-4 py-2 mx-auto text-center text-white border rounded-md sm:mx-0 sm:w-auto bg-customPink hover:bg-transparent border-customPink"
          >
            Descargar CV
          </a>

          <LanguageCv
            mode={mode}
            language={language}
            setLanguage={setLanguage}
          />
        </div>
      </div>
    </section>
  );
};

export default InfoUser;
