import React from "react";
import { Link } from "react-router-dom";

const MyProyects = ({ proyect }) => {
  return (
   
      <div className="proyecto">
         <Link to={`/proyect/${proyect.id}`}>
        <img src={proyect.img} alt={proyect.title} />
        <div className="info-proyecto">
          <h4>{proyect.title}</h4>
          <p>{proyect.description}</p>
        </div>
        </Link>
      </div>
   
  );
};

export default MyProyects;
