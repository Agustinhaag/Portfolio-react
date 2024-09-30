import React from "react";
import { Link } from "react-router-dom";

const MyProyects = ({ proyect, index }) => {
  return (
    <div
      className={`proyecto min-w-[25%] hover:z-40 hover:cursor-pointer hover:rounded-lg 
      ${index === 0 ? "hover:origin-left" : "hover:origin-center"}
    
      `}
    >
      <Link to={`/proyect/${proyect.id}`}>
        <img
          src={proyect.img}
          alt={proyect.title}
          className="object-cover w-full h-full hover:rounded-lg max-h-80"
        />
        <div className="info-proyecto absolute left-0 w-full p-2.5 opacity-0 text-customPink bg-black bg-opacity-75">
          <h4 className="pb-1">{proyect.title}</h4>
          <p className="text-xs">{proyect.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default MyProyects;
