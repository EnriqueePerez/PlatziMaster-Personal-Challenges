let numeros = [6, 3, 1, 6, 2, 8, 3, 0];

function ordenar(lista) {
  let longitud = lista.length;
  for (let x = 0; x < longitud; x++) {
    //Repite el ordenamiento x numero de veces hasta que termina
    for (let i = 0; i < longitud; i++) {
      // Ordena una vez por todo el array
      if (lista[i] > lista[i + 1]) {
        let temp = lista[i]; // Se guarda el primer numero
        lista[i] = lista[i + 1]; //El primer numero pasa a tener el valor del segundo
        lista[i + 1] = temp; //El segundo obtiene el valor del primer termino
      }
    }
  }
  return lista;
}

console.log(ordenar(numeros));
