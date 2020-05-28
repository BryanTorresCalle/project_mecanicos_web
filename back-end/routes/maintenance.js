const express = require("express");
const router = express.Router();
const {
  createMaintenance,
  updateMaintenance,
  showMaintenances,
  showMaintenance,
  validateMaintenance,
  deleteMaintenance,
 
} = require("../controllers/maintenance");

router.get("/maintenances", (req, res) => {
  showMaintenances()
    .then((answerDB) => {
      let records = answerDB.rows;
      res.send({
        ok: true,
        info: records,
        mensaje: "Mantenimientos consultados",
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/maintenance/:plate", (req, res) => {
  let infoMaintenance = req.params.placa;
  showMaintenance(infoMaintenance)
    .then((answerDB) => {
      res.send({
        ok: true,
        info: answerDB.rows,
        mensaje: "mantenimiento consultado",
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

router.post("/maintenance", (req, res) => {
  try {
    let infoMaintenance = req.body;
    validateMaintenance(infoMaintenance);
    createMaintenance(infoMaintenance)
      .then((answerDB) => {
        res.send({
          ok: true,
          mensaje: "Mantenimiento guardado",
          info: infoMaintenance,
        });
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.send(error);
  }
});

router.delete("/mantenimientos/:plate", (req, res) => {
  try {
    let infoMaintenance = req.params.placa;
    deleteMaintenance(infoMaintenance)
      .then((answerDB) => {
        res.send({
          ok: true,
          mensaje: "mantenimiento eliminado",
        });
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.send(error);
  }
});

router.put("/mantenimientos/:plate", (req, res) => {
  try {
    //Capturar el body desde la solicitud
    let id = req.params.plate;
    let infoMaintenance = req.body;

    // Actualiza el usuario en base de datos

    updateMaintenance(infoMaintenance, id)
      .then((answerDB) => {
        res.send({
          ok: true,
          mensaje: "mantenimiento editado",
          info: infoMaintenance,
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
