import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const UserLinks = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <section className="flex md:flex-col flex-row md:w-1/5 w-full justify-between md:items-start items-end h-full md:min-h-[450px] py-3 px-2">
      <div className="flex flex-col gap-4 text-custom-grey">
        <div className="flex gap-2 items-center">
          <span className="text-3xl">
            <FaGithub />
          </span>
          <Link
            to={`/github`}
            className={`hover:text-white ${
              pathName === `/github` ? "text-white" : "text-neutral-400"
            }`}
          >
            Mi Github
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-[26px]">
            <BsPencilSquare />
          </span>
          <Link
            to={`/proyects`}
            className={`hover:text-white ${
              pathName === "/proyects" ? "text-white" : "text-neutral-400"
            }`}
          >
            Mis proyectos
          </Link>
        </div>
      </div>
      <div className="flex w-full">
        <Link
          to="/"
          className="border md:w-1/2 w-1/5  md:h-auto h-12  text-sm border-customPink py-2 px-3 text-center  rounded-md bg-transparent text-white hover:bg-customPink hover:cursor-pointer"
        >
          Volver
        </Link>
      </div>
    </section>
  );
};

export default UserLinks;
