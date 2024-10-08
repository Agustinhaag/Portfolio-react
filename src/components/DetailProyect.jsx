import React from "react";
import { GrStatusGood } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { IoCalendarNumber } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";


const DetailProyect = ({
  proyect,
  viewDetailProyect,
  setViewDetailProyect,
  mode
}) => {
  

  return (
    <CSSTransition
      in={viewDetailProyect}
      timeout={200}
      classNames="modal"
      unmountOnExit
    >
      <div className="modal-overlay">
        <div
          className="modal-content min-w-80"
          style={{
            boxShadow: "rgba(100,100,111,0.2) 0px 7px 29px 0px",
            maxHeight: "85vh",
          }}
        >
          <div className=" flex items-center mb-5 pb-5 border-b border-custom-grey w-full">
            <h3 className="font-semibold text-2xl">Detalle proyecto</h3>
          </div>
          <button
            onClick={() => setViewDetailProyect(false)}
            className="absolute top-5 right-5 py-1 px-1.5 transition-all  border-2 border-customPink bg-transparent rounded-md hover:bg-customPink text-white hover:cursor-pointer"
          >
            <IoMdClose />
          </button>

          <div>
            <h2 className="text-2xl pb-4 font-extralight text-neutral-300">
              {proyect.title}
            </h2>
            <img
              className="w-2/3 mx-auto rounded min-w-60"
              src={proyect.imgComplete || proyect.img}
              alt={proyect.title}
            />

            <div className="flex py-4 justify-around">
              <p className="text-neutral-200 flex gap-1 items-center">
                <span className="text-customPink text-2xl">
                  <IoCalendarNumber />
                </span>
                {proyect.date}
              </p>

              <p className="text-neutral-200 flex gap-1 items-center ">
                <span className="text-green-600 text-2xl">
                  <GrStatusGood />
                </span>
                {proyect.status}
              </p>
            </div>
            <p className="text-neutral-400 ">{proyect.description}</p>
            <div>
              <h3
                className="py-2 text-2xl underline-offset-2"
                style={{ textDecoration: "1.5px underline #f072e9" }}
              >
                Tecnologías:
              </h3>
              <div className="flex gap-2 w-full flex-wrap">
                {proyect.technology.map((tech, index) => (
                  <span key={index} className="md:text-[50px] text-4xl mb-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex sm:gap-0 gap-2 sm:flex-row flex-col pt-9 pb-3 md:w-3/4 sm:w-5/6 w-1/2 mx-auto justify-between">
              <Link
                to={proyect.urlGithub}
                className="py-2 px-5 border justify-center border-customPink  hover:bg-customPink text-white rounded-md flex items-center gap-2 hover:text-white"
              >
                Repositorio
              </Link>
              {proyect.urlDeploy && (
                <Link
                  to={proyect.urlDeploy}
                  className="bg-customPink justify-center text-white border border-customPink hover:bg-transparent py-2 px-5 rounded-md flex items-center gap-2 "
                >
                  Deploy
                </Link>
              )}
            </div>
          </div>
          <div className="flex justify-around gap-2 pt-5">
            <button
              onClick={() => setViewDetailProyect(false)}
              className="p-2 w-32 transition-all  rounded-md  text-white bg-neutral-900 hover:bg-black"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default DetailProyect;
