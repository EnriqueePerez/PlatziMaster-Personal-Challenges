const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const response = require("./response.js");
const controller = require("./cursos/controller");
const db = require("mongoose");
const url =
  "mongodb+srv://db_user_1:wiPHUJh9Fj0drytL@cluster0-dtp5z.mongodb.net/CRUD";

function connect(url) {
  db.connect(url);
  console.log("Conectado a la base de datos");
}

const app = express();
connect(url);
app.use(bodyParser.json()); //El body parser va antes del router, si no, no jala
app.use(router);
// app.use("/", function (req, res) {
//   res.send("Holaaa");
// });

router.post("/cursos", function (req, res) {
  controller
    .addCurso(req.body.nombre, req.body.descripcion, req.body.link)
    .then(() => {
      response.success(req, res, `${req.body.nombre} Agregado`, 201);
    })
    .catch(() => {
      response.error(req, res, "Falta el nombre o link del curso", 500);
    });
});

router.patch("/cursos", function (req, res) {
  controller
    .updateCurso(req.body.nombre, req.body.descripcion, req.body.link)
    .then(() => {
      response.success(req, res, "Curso Actualizado", 201);
    })
    .catch(() => {
      response.error(
        req,
        res,
        "Falta el nombre del curso o no hay datos para cambiar",
        400
      );
    });
});

router.delete("/cursos", function (req, res) {
  controller
    .deleteCurso(req.body.nombre)
    .then(() => {
      response.success(
        req,
        res,
        `${req.body.nombre} borrado exitosamente`,
        201
      );
    })
    .catch(() => {
      response.error(req, res, "Nombre no encontrado", 400);
    });
});

router.get("/cursos", function (req, res) {
  controller
    .getCursos()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch(() => {
      response.error(req, res, "Error Inesperado", 500);
    });
});

app.listen(5000);
console.log("App corriendo en http://localhost:5000");
