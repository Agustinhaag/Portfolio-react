import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDarkMode } from "../context/ModeContext";
import UserLinks from "../components/UserLinks";
import InfoGithub from "../components/InfoGithub";
import { useParams } from "react-router-dom";
import Proyects from "../components/Proyects";

const Github = () => {
  const { mode } = useDarkMode();
  const [user, setUser] = useState([]);
  const { detail } = useParams();
  useEffect(() => {
    const userGithub = async () => {
      const data = await axios.get("https://api.github.com/users/Agustinhaag");
      setUser(data.data);
    };
    userGithub();
  }, []);

  return (
    <main className="flex pt-24 mb-4 md:flex-row flex-col">
      <UserLinks mode={mode} detail={detail} />
      {detail === "github" ? (
        <InfoGithub mode={mode} user={user} />
      ) : (
        <Proyects mode={mode}/>
      )}
    </main>
  );
};

export default Github;
