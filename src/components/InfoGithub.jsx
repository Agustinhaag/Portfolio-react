import React from "react";
import { FaGithub, FaLinkedin, FaTable } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const InfoGithub = ({ user, mode }) => {
  return (
    <div className="flex flex-col items-center md:w-4/5 w-full my-2 ">
      <div className="flex flex-col items-center w-full gap-2 ">
        <div
          className={`md:w-full  bg-opacity-70  ${
            mode ? "bg-black" : "bg-neutral-600"
          } px-2 py-4 rounded flex gap-5 md:mr-3 w-[98%] md:mx-0 mx-auto`}
        >
          <img
            src={user.avatar_url}
            alt={user.name}
            className="sm:w-36 custom:w-28 w-20 rounded-full md:min-h-36 md:min-w-32 max-h-40"
          />
          <div className="flex flex-col gap-1 justify-center items-start">
            <h4 className={`sm:text-3xl text-2xl text-center text-white`}>
              {user.name}
            </h4>
            <p
              className={`${
                mode ? "text-neutral-400" : "text-neutral-200"
              } sm:text-sm text-xs lg:w-full md:w-4/5 w-full`}
            >
              {user.bio}
            </p>
          </div>
        </div>

        <div className="w-full md:pl-0 pl-3">
          <div className="flex custom:flex-row flex-col  sm:gap-0 custom:gap-2 gap-4 text-start pt-3 custom:pb-5 pb-0">
            <div className="custom:w-1/2 w-full flex flex-col">
              <p
                className={`font-light flex items-center gap-1  ${
                  mode ? "text-neutral-400" : "text-neutral-500"
                }`}
              >
                <span className="text-xl text-customPink">
                  <MdEmail />
                </span>
                Email:
              </p>
              <Link
                className="no-underline "
                to="mailto:agustin-haag@hotmail.com"
              >
                agustin-haag@hotmail.com
              </Link>
            </div>
            <div className="custom:w-1/2 w-full">
              <p
                className={`font-light flex items-center gap-1  ${
                  mode ? "text-neutral-400" : "text-neutral-500"
                }`}
              >
                <span className="text-xl text-customPink">
                  <FaTable />
                </span>
                Total de repositorios:
              </p>
              <p> {user.public_repos}</p>
            </div>
          </div>
          <div className="flex custom:flex-row flex-col  sm:gap-0 custom:gap-2 gap-4 text-start pt-3 pb-5">
            <div className="custom:w-1/2 w-full">
              <p
                className={`font-light flex items-center gap-1  ${
                  mode ? "text-neutral-400" : "text-neutral-500"
                }`}
              >
                <span className="text-xl text-customPink">
                  <IoCalendarNumberSharp />
                </span>
                Fecha de creación:
              </p>
              <p>{new Date(user.created_at).toLocaleDateString()}</p>
            </div>
            <div className="custom:w-1/2 w-full">
              <p
                className={`font-light flex items-center gap-1  ${
                  mode ? "text-neutral-400" : "text-neutral-500"
                }`}
              >
                <span className="text-xl text-customPink">
                  <FaLocationDot />
                </span>
                Ubicacion:
              </p>
              <p> {user.location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:w-2/5 custom:w-2/3 w-11/12 justify-between mt-12 ">
        <Link
          className={`
              ${
                !mode
                  ? " text-white bg-neutral-800 hover:bg-black "
                  : "  text-customBlack hover:bg-neutral-900 bg-white "
              }
           py-2 px-5 rounded-md flex items-center gap-2 hover:text-white`}
          to={user.html_url}
        >
          <span>
            <FaGithub />
          </span>
          Github
        </Link>
        <Link
          className={`
              ${mode ? " text-white" : "  text-customBlack hover:text-white"}
            py-2 px-5 border-blue-800 border rounded-md hover:bg-blue-800 flex items-center gap-2`}
          to="https://www.linkedin.com/in/agustin-haag/"
        >
          <span>
            <FaLinkedin />
          </span>
          Linkedin
        </Link>
      </div>
    </div>
  );
};

export default InfoGithub;
