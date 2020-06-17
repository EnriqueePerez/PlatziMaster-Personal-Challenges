const Model = require("./model");

function addCurso(Curso) {
  const myCurso = new Model(Curso);
  myCurso.save();
}

async function getCursos() {
  const cursos = await Model.find();
  return cursos;
}

async function updateCurso(nombre, descripcion, link) {
  const cursoBuscado = await Model.findOne({
    nombre: nombre,
  });
  if (!descripcion) {
    cursoBuscado.link = link;
    const cursoActualizado = cursoBuscado.save();
    return cursoActualizado;
  } else if (!link) {
    cursoBuscado.descripcion = descripcion;
    const cursoActualizado = cursoBuscado.save();
    return cursoActualizado;
  } else {
    cursoBuscado.descripcion = descripcion;
    cursoBuscado.link = link;
    const cursoActualizado = cursoBuscado.save();
    return cursoActualizado;
  }
}

function deleteCurso(nombre) {
  return Model.deleteOne({
    nombre: nombre,
  });
}

module.exports = {
  add: addCurso,
  list: getCursos,
  update: updateCurso,
  delete: deleteCurso,
};
