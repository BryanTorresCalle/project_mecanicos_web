const ServicePg = require("../services/postgres");

let validateUser = (user) => {
  if (!user) {
    throw {
      ok: false,
      mensaje: "Los datos son obligatorios",
    };
  } else if (!user.id){
    throw {
      ok: false,
      mensaje: "El documento es obligatorio",
      data:user
    };
  } else if (!user.rol) {
    throw {
      ok: false,
      mensaje: "El rol es obligatorio",
    };
  }
};

let createUser = async (user) => {
  let _service = new ServicePg();
  let sql = `INSERT INTO public.usuarios(
        tipo_documento, documento, nombre, apellidos, celular, correo, rol, clave)
        VALUES ($1, $2, $3, $4, $5, $6, $7, md5($8))`;
  let values = [
    user.typeId,
    user.id,
    user.id,
    user.lastName,
    user.phone,
    user.email,
    user.rol,
    user.password,
  ];
  let res = _service.runsql(sql, values);
  return res;
};

let deleteUser = (user) => {
  let _service = new ServicePg();
  let sql = `DELETE FROM public.usuarios where documento = '${user}'`;
  let res = _service.runsql(sql);
  return res;
};

let updateUser = async (user, id) => {
  let _service = new ServicePg();
  let sql = `UPDATE public.usuarios
	SET nombre=$1, apellidos=$2, celular=$3, correo=$4, rol=$5, clave=md5($6)
    WHERE documento = $7`;
  let values = [
    user.nombre,
    user.apellidos,
    user.celular,
    user.correo,
    user.rol,
    user.clave,
    documento,
  ];
  let res = await _service.runsql(sql,values);
  return res;
};

let showUsers = async ()=>{
    let _service = new ServicePg();
    let sql = `SELECT tipo_documento, documento, nombre, apellidos, celular, correo, rol
    FROM public.usuarios;`
    let res = await _service.runsql(sql)
    return res 
}

let showUser = async (id) =>{
    let _service = new ServicePg();
    let sql = `SELECT * FROM public.usuarios WHERE documento = '${id}'`;
    let res = await _service.runsql(sql);
    return res;
}

module.exports = {
    updateUser,
    showUser,
    showUsers,
    createUser,
    deleteUser,
    validateUser
}