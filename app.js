const multiplicar = require("./multiplicar/multiplicar");
const argv = require("./config/yargs").argv;
const colors = require("colors/safe");
//requierds
let comando = argv._[0];
switch (comando) {
  case "listar": {
    multiplicar
      .mostrarTabla(argv.base, argv.limite)
      .then((arr) => {
        arr.forEach((mul) => {
          console.log(colors.red(mul));
        });
      })
      .catch((err) => {
        console.log(colors.red(err));
      });
    break;
  }
  case "crear": {
    multiplicar
      .crearArchivo(argv.base, argv.limite)
      .then(console.log)
      .catch((err) => {
        console.log(colors.red(err));
      });
    break;
  }
  default: {
    console.log("Comando no reconocido");
    break;
  }
}
