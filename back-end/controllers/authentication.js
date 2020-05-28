const servicePg = require("../services/postgres");
const jwt = require("jsonwebtoken");

const SECRET_KEY =
  "6b5df1362899ec5fdf46aa856de497537eeaf7a1df759b1d80c5cf011da5b2419404b0a90f0ac2c80ec062936a8bf166214b5379e301770f0dc067433f5083bcba8b636351672939f816b2548adac3c82e248c8102ab18aa6974934591aef363226f9bde20520b9c01d8511accc80dbc21d81e5f697ec27ac64d384848f1383c 6dc75faf166e39fb0c0087e7d23bfe7701acae29e72d2414b106c7668ac8f8df";

let validateInfo = (user) => {
  if (!user) {
    throw {
      ok: false,
      mensaje: "La información es obligatoria",
    };
  } else if (!user.id) {
    throw {
      ok: false,
      mensaje: "La cedula es obligatoria",
    };
  } else if (!user.password) {
    throw {
      ok: false,
      mensaje: "La contraseña es obligatoria",
    };
  }
};

let queryUser = async (user) => {
  let _service = new servicePg();
  let sql = `SELECT tipo_documento, documento, nombre, apellidos, celular, correo, rol, clave
    FROM public.usuarios where documento = $1 and clave = md5($2)`;
  let values = [user.id, user.password];
  let res = await _service.runsql(sql, values);
  return res;
};
let genToken = (user) => {
  delete user.password;
  let token = jwt.sign(user, SECRET_KEY, { expiresIn: "4h" });
  return token;
};

let decToken = (token) => {
  return jwt.decode(token, SECRET_KEY);
};
let validateToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};

module.exports = {
  validateInfo,
  queryUser,
  genToken,
  validateToken,
  decToken,
};
