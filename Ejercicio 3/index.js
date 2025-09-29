const persona = {
  nombre: "Laura",
  edad: 28,
  ciudad: "Madrid",

  hobbies: ["leer", "viajar", "programar", "fotografía"],

  direccion: {
    calle: "Gran Vía",
    numero: 123,
    codigoPostal: 28013,
  },

  contacto: {
    email: "laura@example.com",
    telefono: "+34 600 123 456",
  },
};

const getKeys = (object) => {
  return Object.keys(object);
};
const getValues = (object) => {
  return Object.values(object);
};

console.log(getKeys(persona));

console.log(getValues(persona));
