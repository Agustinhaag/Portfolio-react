import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { CSSTransition } from 'react-transition-group'

const DetailProyect = ({proyect,viewDetailProyect,setViewDetailProyect}) => {
  return (
    <CSSTransition
    in={viewDetailProyect}
    timeout={200}
    classNames="modal"
    unmountOnExit
  >
    <div className="modal-overlay">
      <div
        className="modal-content"
        style={{
          boxShadow: "rgba(100,100,111,0.2) 0px 7px 29px 0px",
          maxHeight: "85vh",
        }}
      >
        <div className=" flex items-center mb-5 pb-5 border-b border-custom-grey w-full">
          <h3 className="font-semibold text-2xl">Detalle proyecto</h3>
        </div>
        <button
          onClick={() => setViewDetailProyect(false)}
          className="absolute top-5 right-5 py-1 px-1.5 transition-all  border-2 border-customPink bg-transparent rounded-md hover:bg-customPink text-white hover:cursor-pointer"
        >
          <IoMdClose />
        </button>
        
       <div>
        <img   src={proyect.imgComplete || proyect.img}
          alt={proyect.title} />
       </div>
        <div className="flex justify-around gap-2 pt-3">
          <button
            onClick={() => setViewDetailProyect(false)}
            className="p-2 w-32 transition-all text-white bg-customPink rounded-md hover:bg-transparent border border-customPink"
          >
            Aceptar
          </button>
        
        </div>
      </div>
    
     
    </div>
  </CSSTransition>
  )
}

export default DetailProyect