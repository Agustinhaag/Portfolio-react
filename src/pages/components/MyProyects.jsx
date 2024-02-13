import React from "react";
import { Link } from "react-router-dom";

const MyProyects = ({ proyect }) => {
  return (
   
      <div className="proyecto">
         <Link to={`/proyect/${proyect.id}`}>
        <img src={proyect.img} alt={proyect.title} className="w-full h-full object-cover"/>
        <div className="info-proyecto absolute left-0 w-full p-2.5 opacity-0">
          <h4>{proyect.title}</h4>
          <p>{proyect.description}</p>
        </div>
        </Link>
      </div>
   
  );
};

export default MyProyects;
