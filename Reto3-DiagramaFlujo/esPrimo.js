let numero = 2;

console.log("Introduce el numero");

function run(numero) {
  if (numero <= 1) {
    esCero = console.log("El numero es uno, cero, o negativo");
    return esCero;
  }
  for (let counter = 2; counter < numero; counter++) {
    if (numero % counter === 0) {
      noEsPrimo = console.log("El numero introducido no es primo");
      return noEsPrimo;
    }
  }
  console.log("El numero introducido es primo");
}

run(numero);
