import React from "react";

const InfoUser = ({ mode }) => {
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
      <div className="w-2/3 mb-16 ">
        <p className="mb-5 text-3xl font-semibold" style={{ wordBreak: "4px" }}>
          Hola, soy <label className="text-customPink">Agustin Haag</label>
        </p>
        <p
          className={`${
            mode ? "text-white" : "text-customGray"
          } uppercase text-xl mb-5`}
        >
          Fullstack developer
        </p>
        <p
          className={`${
            mode ? "text-white" : "text-customGray"
          } text-xl w-11/12 mb-10`}
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
        <div className="flex justify-center w-full">
          <a
            href="../file/Agustin-Haag.pdf"
            download="CV Agustin Haag"
            className="px-4 py-2 text-white border rounded-md bg-customPink hover:bg-transparent border-customPink"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoUser;
