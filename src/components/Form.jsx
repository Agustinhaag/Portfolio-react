import { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { useDarkMode } from "../context/ModeContext";

const Form = () => {
  const [formSubmit, setFormSubmit] = useState(false);
const {mode} = useDarkMode()


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submit = async (e) => {
    emailjs
      .sendForm(
        "service_074lwji",
        "template_yd0tvfw",
        "#form",
        "u8IBa9FQG0gH1632j"
      )
      .then((res) => {
        console.log(res);
        reset();
      });
    setFormSubmit(true);
  };

  return (
    <section id="contact" className="form flex flex-col items-center h-full">
      {formSubmit ? (
        <div className="sendTrue flex flex-col items-center w-full">
          <h3>Muchas gracias por comunicarse con nosotros.</h3>
          <p className="my-4">En breve nos pondremos en contacto.</p>
          <div className="container-btn-form flex justify-end w-1/2 my-5">
            <button
            className={mode ? 'text-black py-2.5 px-5 w-1/5 border-2 border-solid border-customPink': "text-black py-2.5 px-5 w-1/5 border border-solid border-customGray"}
              onClick={() => {
                setFormSubmit(false);
              }}
            > 
              Volver
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className={mode ?'text-white':'text-customBlack'}>Contacta conmigo</h2>
          <form id="form" onSubmit={handleSubmit(submit)} className={mode ? 'formdark flex flex-col w-4/5 mb-12 text-black': 'flex flex-col w-4/5 mb-12 text-black'}>
            <div className="container-input flex w-full">
              <div className="container-small">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={errors.name ? "error" : ""}
                  placeholder="Nombre completo *"
                  {...register("name", { required: "El nombre es requerido" })}
                />
                {errors.name && (
                  <span className="span-error">{errors.name.message}</span>
                )}
              </div>
              <div className="container-small">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={errors.email ? "error" : ""}
                  placeholder="Dirección de Email"
                  {...register("email", { required: "El email es requerido" })}
                />
                {errors.email && (
                  <span className="span-error">{errors.email.message}</span>
                )}
              </div>
            </div>
            <div className="container-check">
              <input
                type="number"
                id="telefono"
                name="telefono"
                className={errors.telefono ? "error" : "" }
                placeholder="Asunto"
                {...register("telefono", {
                  required: "El teléfono es requerido",
                })}
              />
              {errors.telefono && (
                <span className="span-error">{errors.telefono.message}</span>
              )}
            </div>
            <div className="container-check">
              <textarea
                name="mensaje"
                placeholder="Mensaje"
                id="mensaje"
                className={errors.mensaje ? "error" : ""}
                cols="30"
                rows="10"
                {...register("mensaje", {
                  required: "El mensaje es requerido",
                })}
              ></textarea>
              {errors.mensaje && (
                <span className="span-error">{errors.mensaje.message}</span>
              )}
            </div>
            <div className="container-btn-form flex justify-center w-full">
              <button type="submit"  className={mode ? 'bg-slate-300 w-1/4 py-2.5 px-5  border-2 border-solid border-customPink ' : "bg-none w-1/4 py-2.5 px-5 border border-solid border-customBlack"}>Enviar</button>
            </div>
          </form>
        </>
      )}
    </section>
  );
};

export default Form;
