import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../context/ModeContext";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  const { mode } = useDarkMode();
  return (
    <footer
      className={`flex flex-col items-center justify-center h-full text-white bg-black ${
        mode ? "bg-opacity-50" : "bg-opacity-85"
      } `}
    >
      <div className="text-2xl gap-5 flex justify-between my-2.5 w-auto">
        <Link to="https://www.instagram.com/agushaag22/">
          <i className="text-red-600 fa-brands fa-instagram"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/agustin-gerardo-haag-letterucci-8a6546225/">
          <i className="text-blue-600 fa-brands fa-linkedin"></i>
        </Link>
        <Link to="mailto:agustin-haag@hotmail.com">
          <i className="fa-solid fa-envelope text-cyan-600"></i>
        </Link>
      </div>
      <p className="my-4 text-base">&copy;All rights reserved - 2024</p>
    </footer>
  );
};

export default Footer;
