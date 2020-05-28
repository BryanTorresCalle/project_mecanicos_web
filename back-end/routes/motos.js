const express = require("express");
const router = express.Router();
const {
  showMotos,
  showMoto,
  deleteMoto,
  createMoto,
  updateMoto,
  validateMoto,
} = require("../controllers/motos");

router.get("/motos", (req, res) => {
  showMotos()
    .then((answerDB) => {
      let records = answerDB.rows;
      res.send({
        ok: true,
        info: records,
        mensaje: "Motos consultadas",
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/motos/:plate", (req, res) => {
  let infoMoto = req.params.placa;
  showMoto(infoMoto)
    .then((answerDB) => {
      res.send({
        ok: true,
        info: answerDB.rows,
        mensaje: "Moto consultada",
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

router.post("/motos", (req, res) => {
  try {
    let infoMoto = req.body;
    validateMoto(infoMoto);
    createMoto(infoMoto)
      .then((answerDB) => {
        res.send({
          ok: true,
          mensaje: "Moto guardada",
          info: infoMoto,
        });
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.send(error);
  }
});

router.delete("/motos/:plate", (req, res) => {
  try {
    let infoMoto = req.params.placa;
    deleteMoto(infoMoto)
      .then((answerDB) => {
        res.send({
          ok: true,
          mensaje: "Moto eliminada",
        });
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.send(error);
  }
});

router.put("/motos/:plate", (req, res) => {
  try {
    
    let plate = req.params.plate;
    let infoMoto = req.body;

    updateMoto(infoMoto, plate)
      .then((answerDB) => {
        res.send({
          ok: true,
          mensaje: "Moto editada",
          info: infoMoto,
        });
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