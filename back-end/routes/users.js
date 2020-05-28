const express = require("express");
const router = express.Router();

const {
  updateUser,
  showUser,
  showUsers,
  createUser,
  deleteUser,
  validateUser,
} = require("../controllers/users");

router.get("/users", (req, res) => {
  showUsers()
    .then((answerDB) => {
      let records = answerDB.rows
      res.send({
        ok: true,
        info: records,
        mensaje: "Usuarios consultados",
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/users/:id", (req, res) => {
  let data = req.params.id;
  showUser(data)
    .then((answerDB) => {
      let records = answerDB.rows;
      res.send({
        ok: true,
        info: records,
        mensaje: "Usuario consultado",
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

router.post("/users", (req, res) => {
  try {
    let data = req.body;
    validateUser(data);
    createUser(data)
      .then((answerDB) => {
        res.send({
          ok: true,
          mensaje: "Usuario guardado",
          info: data,
        });
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.send(error);
  }
});

router.delete("/users/:id", (req, res) => {
  try {
    let data = req.params.id;
    deleteUser(data)
      .then((answerDB) => {
        res.send({
          ok: true,
          info: data,
          mensaje: "Usuario eliminado",
        });
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.send(error);
  }
});
router.put("/users/:id", (req, res) => {
  try {
    //Capturar el body desde la solicitud
    let id = req.params.id;
    let data = req.body;

    // Actualiza el usuario en base de datos

    updateUser(data, id)
      .then((answerDB) => {
        res.send({ ok: true, mensaje: "Usuario editado", info: data });
      })
      .catch((error) => {
        res.send(error);
      });

    // Responder
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;