const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const vs = "/api/v1/";

const routeLogin = require("./routes/authentication");
const routeUsers = require("./routes/users"); 
const routeMotos = require("./routes/motos")
const routeMaintenance = require("./routes/maintenance")

app.use(vs, routeLogin);
app.use(vs,routeUsers);
app.use(vs,routeMotos)
app.use(vs,routeMaintenance)

app.use("/", (req, res) => {
  res.status(404).send({
    ok: false,
    message: "El recurso que busca no existe",
  });
});

// Puerto
const port = 3001;
app.listen(port, () => {
  console.log(
    `Escuchando API en http://localhost:${port}/api/v1`
  );
});