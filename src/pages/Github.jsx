import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../context/ModeContext";
import UserLinks from "../components/UserLinks";
import { MdEmail } from "react-icons/md";
import { FaTable } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarNumberSharp } from "react-icons/io5";

const Github = () => {
  const { mode } = useDarkMode();
  const [user, setUser] = useState([]);
  useEffect(() => {
    const userGithub = async () => {
      const data = await axios.get("https://api.github.com/users/Agustinhaag");
      setUser(data.data);
    };
    userGithub();
  }, []);

  return (
    <main className="flex pt-24">
      <UserLinks />
      <div className="flex flex-col items-center md:w-4/5 w-full my-2 ">
        <div className="flex flex-col items-center w-full gap-2 ">
          <div className="w-full bg-black  bg-opacity-70  px-2 py-4 rounded flex gap-5 mr-3">
            <img
              src={user.avatar_url}
              alt={user.name}
              className="sm:w-36 w-28 rounded-full min-h-36 min-w-32 max-h-40"
            />
            <div className="flex flex-col gap-1 justify-center items-start">
              <h4 className=" text-3xl text-center">{user.name}</h4>
              <p className="text-neutral-400 text-sm w-4/5">{user.bio}</p>
            </div>
          </div>

          <div className="w-full">
            <div className="flex sm:flex-row flex-col sm:gap-0 gap-2 text-start pt-3 pb-5">
              <div className="w-1/2 flex flex-col">
                <p className="font-light flex items-center gap-1 text-neutral-400">
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
              <div className="w-1/2">
                <p className="font-light flex items-center gap-1 text-neutral-400">
                  <span className="text-xl text-customPink">
                    <FaTable />
                  </span>
                  Total de repositorios:
                </p>
                <p> {user.public_repos}</p>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-0 gap-2 text-start pt-3 pb-5">
              <div className="w-1/2">
                <p className="font-light text-neutral-400 flex items-center gap-1">
                  <span className="text-xl text-customPink">
                    <IoCalendarNumberSharp />
                  </span>
                  Fecha de creación:
                </p>
                <p>{new Date(user.created_at).toLocaleDateString()}</p>
              </div>
              <div className="w-1/2">
                <p className="font-light text-neutral-400 flex items-center gap-1">
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

        <div className="flex w-2/5 justify-between mt-12">
          <Link
            className={`
              ${mode ? " text-white" : "  text-customBlack"}
           py-2 px-5 border-neutral-900 border-2 rounded-md bg-neutral-900 hover:bg-transparent`}
            to={user.html_url}
          >
            Github
          </Link>
          <Link
            className={`
              ${mode ? " text-white" : "  text-customBlack"}
            py-2 px-5 border-blue-800 border rounded-md hover:bg-blue-800`}
            to="https://www.linkedin.com/in/agustin-haag/"
          >
            Linkedin
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Github;
