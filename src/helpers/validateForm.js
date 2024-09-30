export const validateContact = async (input) => {
  const errors = {};
  const emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!input.name) {
    errors.name = "El nombre es requerido";
  }
  if (!input.email) {
    errors.email = "El email es requerido";
  }
  if (input.email && !emailRegex.test(input.email)) {
    errors.email = "El email es inválido";
  }
  if (!input.asunto) {
    errors.asunto = "El asunto es requerido";
  }
  if (!input.message) {
    errors.message = "El mensaje es requerido";
  }

  return errors;
};
