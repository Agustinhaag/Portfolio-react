import { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Form = () => {
  const [formSubmit, setFormSubmit] = useState(false);

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
    <section id="contact" className="form">
      {formSubmit ? (
        <div className="sendTrue">
          <h3>Muchas gracias por comunicarse con nosotros.</h3>
          <p>En breve nos pondremos en contacto.</p>
          <div className="container-btn-form">
            <button
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
          <h2>Contacta conmigo</h2>
          <form id="form" onSubmit={handleSubmit(submit)}>
            <div className="container-input">
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
                className={errors.telefono ? "error" : ""}
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
            <div className="container-btn-form">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </>
      )}
    </section>
  );
};

export default Form;
