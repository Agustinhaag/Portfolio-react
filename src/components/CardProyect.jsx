import React, { useState } from "react";
import { MdOutlineDescription } from "react-icons/md";
import { IoCalendarNumber } from "react-icons/io5";
import { GrStatusGood } from "react-icons/gr";
import DetailProyect from "./DetailProyect";

const CardProyect = ({ proyect }) => {
  const [viewDetailProyect, setViewDetailProyect] = useState(false);
  const toggleMenu = () => {
    setViewDetailProyect(!viewDetailProyect);
  };
  return (
    <div className="relative  text-white flex items-center overflow-hidden  bg-neutral-800 bg-opacity-90 rounded-bl-3xl rounded-tr-3xl shadow-md   duration-300 ease-in-out  h-[230px]">
      <div className="overflow-hidden relative w-[34%] h-full ">
        <img
          src={proyect.imgComplete || proyect.img}
          alt={proyect.title}
          
          className="absolute inset-0 h-full w-full rounded-bl-3xl"
        />
      </div>
      <div className="flex flex-col justify-between gap-3 px-4 w-[66%]">
        <h5 className="text-lg font-semibold mb-1">{proyect.title}</h5>
        <p className="text-neutral-500 flex gap-1 items-center text-sm ">
          <span className=" text-customPink text-2xl">
            <MdOutlineDescription />
          </span>
          <span className="truncate-description">{proyect.description}</span>
        </p>

        <p className="text-neutral-500 flex gap-1 items-center">
          <span className="text-customPink text-2xl">
            <IoCalendarNumber />
          </span>
          {proyect.date}
        </p>

        <p className="text-neutral-500 flex gap-1 items-center">
          <span className="text-green-600 text-2xl">
            <GrStatusGood />
          </span>
          {proyect.status}
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => {
              setViewDetailProyect(!viewDetailProyect);
            }}
            className="border border-customPink py-1.5 px-2 rounded-md text-white bg-transparent hover:bg-customPink mt-3 w-2/5 min-w-24 text-center"
          >
            Ver más
          </button>
        </div>
      </div>
      {viewDetailProyect && (
        <div
          className="fixed inset-0 bg-black bg-opacity-55 z-40"
          onClick={toggleMenu}
        ></div>
      )}
      <DetailProyect
        proyect={proyect}
        setViewDetailProyect={setViewDetailProyect}
        viewDetailProyect={viewDetailProyect}
      />
    </div>
  );
};

export default CardProyect;
