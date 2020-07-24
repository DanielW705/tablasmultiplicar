const opts = {
  base: {
    demand: true,
    alias: "b",
  },
  limite: {
    alias: "li",
    default: 10,
  },
};
const argv = require("yargs")
  .command(
    ["listar", "crear"],
    "imprime en consola una tabla de multiplicar o crea una tabla de multiplicar",
    opts
  )
  .help().argv;
module.exports = {
  argv,
};
