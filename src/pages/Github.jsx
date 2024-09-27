import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDarkMode } from "../context/ModeContext";

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
    <div>
      <Navbar />
      <div className="flex flex-col items-center w-4/5 mx-auto my-0 cont-github">
        <div className="flex flex-col items-center w-11/12 gap-2 md:flex-row ">
          <div className="w-2/4 p-1 rounded bg-neutral-400md:min-w-96 md:h-96 min-w-64 min-h-64">
            <img
              src={user.avatar_url}
              alt={user.name}
              className="w-full h-full rounded"
            />
          </div>

          <div className="w-full">
            <h4 className="mb-5 text-3xl text-center">{user.name}</h4>
            <p>
              <span className="mr-1 font-semibold underline-offset-2" style={{textDecorationColor: "#f072e9"}}>Biografía:</span> {user.bio}
            </p>
            <p>
              <span className="mr-1 font-semibold underline-offset-2" style={{textDecorationColor: "#f072e9"}}>Cantidad de repos:</span> {user.public_repos}
            </p>
            <p>
              <span className="mr-1 font-semibold underline-offset-2" style={{textDecorationColor: "#f072e9"}}>Creacion:</span>
              {new Date(user.created_at).toLocaleDateString()}
            </p>
            <p>
              <span className="mr-1 font-semibold underline-offset-2" style={{textDecorationColor: "#f072e9"}}> Ubicacion:</span> {user.location}
            </p>
            <p>
              <span className="mr-1 font-semibold underline-offset-2" style={{textDecorationColor: "#f072e9"}}> Email:</span>
              <Link className="no-underline" to="mailto:agustin-haag@hotmail.com">
                agustin-haag@hotmail.com
              </Link>
            </p>
            <p>{user.company ? user.company : "Desarrollador independiente"}</p>
          </div>
        </div>

        <div className="flex justify-between mt-12 cont-btn-git">
          <Link
            className={
              mode
                ? "git py-2.5 px-5 text-white"
                : "git  py-2.5 px-5 text-customBlack"
            }
            to={user.html_url}
          >
            Github
          </Link>
          <Link
            className={
              mode
                ? "linkedin py-2.5 px-5 text-white"
                : "linkedin py-2.5 px-5 text-customBlack"
            }
            to="https://www.linkedin.com/in/agustin-haag/"
          >
            Linkedin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Github;
