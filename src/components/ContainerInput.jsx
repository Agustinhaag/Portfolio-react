import React from "react";
import { Field, ErrorMessage } from "formik";

const ContainerInput = ({
  nombre,
  title,
  formikProps,
  error,
  textarea,
  mode,
}) => {
  return (
    <div className="w-full">
      <div className="cont-input">
        <Field
          as={textarea ? "textarea" : "input"}
          type="text"
          name={nombre}
          className={`${
            (formikProps.errors[nombre] && formikProps.touched[nombre]) || error
              ? "error"
              : ""
          } ${mode ? "input" : "inputNoDark"}  ${
            textarea ? "h-32 resize-none" : "sm:h-12 h-9"
          }`}
          placeholder=" "
        />
        <label
          htmlFor={nombre}
          className={`${
            (formikProps.errors[nombre] && formikProps.touched[nombre]) || error
              ? "errorLabel"
              : ""
          } ${mode ? "label" : "labelNoDark"} ${
            textarea ? "top-[20%]" : "top-[50%]"
          }`}
          style={{
            transform: "translateY(-50%)",
            transition: ".4s",
          }}
        >
          {title}
        </label>
      </div>
      <span className="span" style={{ color: "red" }}>
        <ErrorMessage name={nombre} />
      </span>
    </div>
  );
};

export default ContainerInput;
