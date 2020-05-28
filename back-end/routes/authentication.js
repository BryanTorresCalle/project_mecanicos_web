const express = require("express");
const router = express.Router();
const _controller = require("../controllers/authentication");

router.use((req, res, next) => {
  try {
    let url = req.url;
    if (url === "/login") {
      next();
    } else {
      let token = req.headers.token;
      let verify = _controller.validateToken(token);
      next();
    }
  } catch (error) {
    res.status(401).send({ ok: false, info: error, message: "No autenticado" });
  }
});

router.post("/login", (req, res) => {
  try {
    let body = req.body;
    _controller.validateInfo(body);
    _controller
      .queryUser(body)
      .then((answerDB) => {
        let user = answerDB.rowCount > 0 ? answerDB.rows[0] : undefined;
        if (user) {
          let token = _controller.genToken(user);
          res.status(200).send({
            ok: true,
            info: token,
            rol: user.rol,
            message: "Persona autenticada",
          });
        } else {
          res.status(400).send({
            ok: false,
            info: {},
            message: "Documento y/o clave incorrecta.",
          });
        }
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/verify", (req, res) => {
  try {
    let token = req.headers.token;
    let verificacion = _controller.validateToken(token);
    res.status(200).send({
      ok: true,
      info: token,
      mensaje: "Autenticado.",
    });
  } catch (error) {
    res.status(401).send({
      ok: false,
      info: error,
      mensaje: "No Autenticado",
    });
  }
});
router.post("/verify", (req, res) => {
  try {
    let body = req.body;
    _controller.validateInfo(body);
    _controller
      .queryUser(body)
      .then((answerDB) => {
        let user =
          answerDB.rowCount > 0 ? answerDB.rows[0] : undefined;
        if (user) {
          let token = _controlador.genToken(user);
          res.status(200).send({
            ok: true,
            info: token,
            mensaje: "Persona autenticada.",
            rol: user.rol,
          });
        } else {
          res.status(400).send({
            ok: false,
            info: {},
            mensaje: "Documento y/o clave incorrecta.",
          });
        }
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
