const store = require("./store");
const { Model } = require("mongoose");

function addCurso(nombre, descripcion, link) {
  return new Promise((resolve, reject) => {
    if (!nombre || !link) {
      console.error("[controller] Falta el nombre o el link del curso");
      reject("Faltan datos");
      return false;
    }
    const body = {
      nombre: nombre,
      descripcion: descripcion,
      link: link,
    };
    console.log(body);
    store.add(body);
    resolve();
  });
}

function getCursos() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

function updateCurso(nombre, descripcion, link) {
  return new Promise((resolve, reject) => {
    if (!nombre) {
      console.error("Hace falta el nombre del curso");
      reject("Falta nombre del curso");
      return false;
    } else if (!descripcion && !link) {
      console.error("No hay datos para cambiar");
      reject("No hay descripcion ni link");
      return false;
    }
    const result = store.update(nombre, descripcion, link);
    resolve(result);
  });
}

function deleteCurso(nombre) {
  return new Promise((resolve, reject) => {
    if (!nombre) {
      console.error("El nombre no existe");
      reject("Nombre invalido");
      return false;
    }
    store
      .delete(nombre)
      .then(() => {
        resolve();
      })
      .catch(() => {
        reject();
      });
  });
}

module.exports = {
  addCurso,
  getCursos,
  updateCurso,
  deleteCurso,
};
