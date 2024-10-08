import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PATHROUTES from "../helpers/pathroute";

const UserLinks = ({ mode,detail }) => {

  const linkGithub = mode
    ? `hover:text-white ${
        detail === `github` ? "text-white" : "text-neutral-400"
      }`
    : `hover:text-black ${
        detail === `github` ? "text-black" : "text-neutral-400"
      }`;
      const linkProyect = mode
    ? `hover:text-white ${
        detail === `proyects` ? "text-white" : "text-neutral-400"
      }`
    : `hover:text-black ${
        detail === `proyects` ? "text-black" : "text-neutral-400"
      }`;
  return (
    <section className="flex md:flex-col flex-row md:w-1/5 w-full justify-between md:items-start items-end h-full md:min-h-[450px] min-w-32 py-3 px-2">
      <div className="flex flex-col gap-5 ">
        <div className="flex gap-2 items-center">
          <span className="text-3xl">
            <FaGithub />
          </span>
          <Link to={PATHROUTES.GITHUB} className={linkGithub}>
            Mi Github
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-[26px]">
            <BsPencilSquare />
          </span>
          <Link to={PATHROUTES.PROYECTS} className={linkProyect}>
            Proyectos
          </Link>
        </div>
      </div>
      <div className="flex md:w-full">
        <Link
          to={PATHROUTES.HOME}
          className={`border md:w-1/2 w-full min-w-[74px] md:h-auto  text-sm border-customPink py-2 px-3 text-center  rounded-md bg-transparent ${
            mode ? "text-white" : "text-black"
          }  hover:bg-customPink hover:cursor-pointer`}
        >
          Volver
        </Link>
      </div>
    </section>
  );
};

export default UserLinks;
