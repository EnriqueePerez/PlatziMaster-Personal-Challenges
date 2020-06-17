const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  nombre: String,
  descripcion: String,
  link: String,
});

const model = mongoose.model("cursos", mySchema);
module.exports = model;
