const fs = require("fs");
const { resolve } = require("path");
const { table } = require("console");
const crearArchivo = (base, limite = 10) => {
  let data = "";
  return new Promise((resolve, reject) => {
    if (!base || isNaN(base)) reject("Hace falta una base valida");
    else if (!limite || isNaN(limite)) reject("Hace falta un limite valido");
    else {
      for (let i = 1; i <= limite; i++) {
        data += `${base} X ${i} = ${base * i} \n`;
      }
      fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) reject(err);
        resolve({
          path: `tablas/tabla-${base}.txt`,
          name: `tabla-${base}.txt`,
          message: "Archivo creado",
        });
      });
    }
  });
};
const mostrarTabla = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!base || isNaN(base)) reject("Hace falta una base valida");
    else if (!limite || isNaN(limite)) reject("Hace falta un limite valido");
    else {
      let tabla = [];
      for (let i = 1; i <= limite; i++) {
        tabla.push(`${base} X ${i} = ${i * base}`);
      }
      resolve(tabla);
    }
  });
};
module.exports = {
  crearArchivo,
  mostrarTabla,
};
