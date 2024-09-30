import { useState } from "react";
import emailjs from "emailjs-com";
import { useDarkMode } from "../context/ModeContext";
import { Formik, Form } from "formik";
import style from "./button.module.css";
import ContainerInput from "./ContainerInput";
import { validateContact } from "../helpers/validateForm";
import Swal from "sweetalert2";

const FormContact = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const { mode } = useDarkMode();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const serviceId = process.env.REACT_APP_SERVICEID;
  const templateId = process.env.REACT_APP_TEMPLATEID;
  const publicKey = process.env.REACT_APP_PUBLICKEY;

  return (
    <section
      id="contact"
      className={`flex flex-col items-center w-full h-full form ${
        mode ? "bg-neutral-700" : "bg-neutral-300"
      }`}
    >
      {formSubmit ? (
        <div className="flex flex-col items-center w-full sendTrue min-h-[30vh]">
          <h3
            className="mt-16 mb-5 text-xl underline-offset-2"
            style={{ textDecoration: "2px underline #f072e9" }}
          >
            Muchas gracias por comunicarse con nosotros.
          </h3>
          <p className="my-4">En breve nos pondremos en contacto.</p>
          <div className="flex justify-end w-1/2 my-5">
            <button
              className={
                mode
                  ? "text-white py-2 px-5 w-1/5 border border-customPink rounded-xl hover:bg-customPink transition duration-200"
                  : "text-white py-2 px-5 w-1/5 border border-customPink rounded-xl bg-customPink transition duration-200 hover:bg-transparent hover:text-black"
              }
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
          <h2
            className={`${
              mode ? "text-white" : "text-customBlack"
            } mt-10 mb-5 text-2xl underline-offset-2 `}
            style={{ textDecoration: "2px underline #f072e9" }}
          >
            Contacta conmigo
          </h2>
          <Formik
            initialValues={{
              name: "",
              email: "",
              asunto: "",
              message: "",
            }}
            validate={validateContact}
            onSubmit={async (values, { resetForm }) => {
              emailjs
                .sendForm(serviceId, templateId, "#form", publicKey)
                .then((res) => {
                  Swal.fire({
                    title: "Consulta enviada éxitosamente",
                    text: "En breve nos pondremos en contacto",
                    icon: "success",
                  });
                })
                .then((res) => {
                  setFormSubmit(true);
                  resetForm();
                });
            }}
          >
            {(formikProps) => (
              <Form
                className="flex flex-col items-start w-2/3 mx-auto"
                id="form"
              >
                <section className="flex w-full gap-2">
                  <ContainerInput
                    error={error}
                    formikProps={formikProps}
                    nombre="name"
                    title="Nombre"
                    type="text"
                    mode={mode}
                  />
                  <ContainerInput
                    error={error}
                    formikProps={formikProps}
                    nombre="email"
                    title="Email"
                    type="email"
                    mode={mode}
                  />
                </section>
                <ContainerInput
                  error={error}
                  formikProps={formikProps}
                  nombre="asunto"
                  title="Asunto"
                  type="text"
                  mode={mode}
                />
                <ContainerInput
                  error={error}
                  formikProps={formikProps}
                  nombre="message"
                  title="Mensaje"
                  type="text"
                  textarea={true}
                  mode={mode}
                />

                {error && (
                  <p className="w-full mb-2 text-center text-red-600">
                    ¡{error}!
                  </p>
                )}
                <div className="flex flex-col justify-center w-full mb-5">
                  <button
                    type="submit"
                    className="relative flex items-center justify-center bg-transparent text-custom-white min-h-10 rounded-xl md:text-base md:py-2 md:px-5 hover:cursor-pointer hover:bg-customPink border border-customPink transition duration-200 hover:text-custom-white text-sm py-1.5 px-4"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className={style.loader}></span>
                    ) : (
                      "Enviar"
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </>
      )}
    </section>
  );
};

export default FormContact;
