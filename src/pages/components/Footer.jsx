import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col text-white items-center justify-center">
      <p >&copy;All rights reserved - 2024</p>
      <div className="container-footer flex justify-between my-2.5 w-auto">
      <Link to="https://www.instagram.com/agushaag22/">
          <i className="fa-brands fa-instagram text-red-600"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/agustin-gerardo-haag-letterucci-8a6546225/">
          <i className="fa-brands fa-linkedin text-blue-600"></i>
        </Link>
        <Link to="mailto:agustin-haag@hotmail.com">
          <i className="fa-solid fa-envelope text-cyan-600"></i>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
