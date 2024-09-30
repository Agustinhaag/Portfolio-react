import React from "react";
import { SiTypescript } from "react-icons/si";

const Services = ({ mode }) => {
  return (
    <section
      id="servicio"
      className={`flex flex-col items-center h-full services py-7 ${
        mode ? "bg-neutral-600" : "bg-neutral-300"
      }`}
    >
      <h2
        className={`${
          mode ? "text-white" : "text-customBlack"
        } uppercase mb-6 underline-offset-4 text-xl`}
        style={{ textDecoration: "1.5px underline #f072e9" }}
      >
        MIS SERVICIOS
      </h2>
      <div className="flex flex-wrap w-full container-services">
        <div className={mode ? "bg-customGray contGral" : "bg-white contGral"}>
          <div className="icon">
            <i className="fa-solid fa-code"></i>
          </div>
          <h4 className="my-6 text-xl text-center uppercase">Diseño web</h4>
          <span className="w-1/4 mb-5 border border-neutral-300"></span>
          <p className="mb-4 text-center text-customPink">
            Html - Css - Typescript - Git - Deploy
          </p>
          <p
            className={`${
              mode ? "text-neutral-400" : "text-customGray"
            } text-center mx-1 text-sm`}
          >
            FrontEnd
          </p>
          <p className="w-11/12 mt-5 text-center">
            Elaboración de webs dinamicas o estaticas, 100% responsive y
            adaptable
          </p>
        </div>
        <div className={mode ? "bg-customGray contGral" : "bg-white contGral"}>
          <div className="icon">
          <SiTypescript />
          </div>
          <h4 className="my-6 text-xl text-center uppercase">
            Manejo de Typescript/Node
          </h4>
          <span className="w-1/4 mb-5 border border-neutral-300"></span>
          <p className="mb-4 text-center text-customPink">
            React - Next - Express - Node
          </p>
          <p
            className={`${
              mode ? "text-neutral-400" : "text-customGray"
            } text-center mx-1 text-sm`}
          >
            FullStack
          </p>
          <p className="w-11/12 mt-5 text-center">
            Manejo de Typescript del lado del cliente y el servidor. Ademas de
            librerias y frameworks
          </p>
        </div>
        <div className={mode ? "bg-customGray contGral" : "bg-white contGral"}>
          <div className="icon">
            <i className="fa-brands fa-node"></i>
          </div>
          <h4 className="my-6 text-xl text-center uppercase">
            Administracion del servidor
          </h4>
          <span className="w-1/4 mb-5 border border-neutral-300"></span>
          <p className="mb-4 text-center text-customPink">
            NodeJS - Express - Postman - Apis Rest
          </p>
          <p
            className={`${
              mode ? "text-neutral-400" : "text-customGray"
            } text-center mx-1 text-sm`}
          >
            BackEnd
          </p>
          <p className="w-11/12 mt-5 text-center">
            Operar con Apis, asincronia y manejo del servidor
          </p>
        </div>
        <div className={mode ? "bg-customGray contGral" : "bg-white contGral"}>
          <div className="icon">
            <i className="fa-solid fa-user-check"></i>
          </div>
          <h4 className="my-6 text-xl text-center uppercase">
            habilidades Blandas
          </h4>
          <span className="w-1/4 mb-5 border border-neutral-300"></span>
          <p className="mb-4 text-center text-customPink">
            Desarrollo personal
          </p>
          <p
            className={`${
              mode ? "text-neutral-400" : "text-customGray"
            } text-center mx-1 text-sm`}
          >
            Trabajo en equipo - Adaptabilidad - Responsabilidad
          </p>
          <p className="w-11/12 mt-5 text-center">
            Aptitudes y actitudes que promueven un buen desempeño
          </p>
        </div>
        <div className={mode ? "bg-customGray contGral" : "bg-white contGral"}>
          <div className="icon">
            <i className="fa-solid fa-database"></i>
          </div>
          <h4 className="my-6 text-xl text-center uppercase">
            Manejo de Base de datos
          </h4>
          <span className="w-1/4 mb-5 border border-neutral-300"></span>
          <p className="mb-4 text-center text-customPink">Sql & NoSql</p>
          <p
            className={`${
              mode ? "text-neutral-400" : "text-customGray"
            } text-center mx-2 text-sm`}
          >
            PostgreSQL - MariaDB - MySQL - Firebase - Mongo
          </p>
          <p className="w-11/12 mt-5 text-center">
            Operación con bases relacionales y no relacionales
          </p>
        </div>
        <div className={mode ? "bg-customGray contGral" : "bg-white contGral"}>
          <div className="icon">
            <i className="fa-solid fa-mobile-screen-button"></i>
          </div>
          <h4 className="my-6 text-xl text-center uppercase">
            Diseño responsive
          </h4>
          <span className="w-1/4 mb-5 border border-neutral-300"></span>
          <p className="mb-4 text-center text-customPink">Mobile First</p>
          <p
            className={`${
              mode ? "text-neutral-400" : "text-customGray"
            } text-center mx-1 text-sm`}
          >
            Flex - Grid - Boostrap- Tailwinds
          </p>
          <p className="w-11/12 mt-5 text-center">
            Diseño responsive totalmente adaptable a cualquier dispositivo
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
