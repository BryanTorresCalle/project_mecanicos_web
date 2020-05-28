const ServicePg = require("../services/postgres");

let validateMoto = (moto) => {
  if (!moto) {
    throw {
      ok: false,
      mensaje: "La información de la moto es obligatoria",
    };
  } else if (!moto.plate) {
    throw {
      ok: false,
      mensaje: "La placa es obligatoria",
    };
  }
};

let createMoto = async (moto) => {
  let _service = new ServicePg();
  let sql = `INSERT INTO public.motos(
        placa, estado, clase, marca, modelo, color, cilindraje, id_propietario, nro_soat, vencimiento_soat, nro_tecnomecanica, 
        vencimiento_tecnomecanica)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
  let values = [
    moto.palte,
    moto.state,
    moto.class,
    moto.brand,
    moto.model,
    moto.color,
    moto.displacement,
    moto.idOwner,
    moto.numSoat,
    moto.expSoat,
    moto.numTecno,
    moto.expTecno,
  ];
  let res = await _service.runsql(sql, values);
  return res;
};



let showMoto = async (plate) => {
  let _service = new ServicePg();
  let sql = `SELECT placa, estado, clase, marca, modelo, color, cilindraje, id_propietario, nro_soat, vencimiento_soat, nro_tecnomecanica, vencimiento_tecnomecanica
    FROM public.motos where placa = '${plate}'`;
  let res = await _service.runsql(sql);
  return res;
};

let showMotos = async () => {
  let _service = new ServicePg();
  let sql = `SELECT placa, estado, clase, marca, modelo, color, cilindraje, id_propietario, nro_soat, vencimiento_soat, nro_tecnomecanica, vencimiento_tecnomecanica
    FROM public.motos`;
  let res = await _service.runsql(sql);
  return res;
};
let updateMoto = async (moto, plate) => {
  let _service = new ServicePg();
  let sql = `UPDATE public.motos
    SET  estado=$1, clase=$2, marca=$3, modelo=$4, color=$5, cilindraje=$6, id_propietario=$7, 
    nro_soat=$8, vencimiento_soat=$9, nro_tecnomecanica=$10, vencimiento_tecnomecanica=$11
    WHERE placa = $12`;
  let values = [
    moto.state,
    moto.class,
    moto.brand,
    moto.model,
    moto.color,
    moto.displacement,
    moto.idOwner,
    moto.numSoat,
    moto.expSoat,
    moto.numTecno,
    moto.expTecno,
    plate,
  ];
  let res = _service.runsql(sql, values);
  return res;
};
module.exports = {
  showMotos,
  showMoto,
  createMoto,
  updateMoto,
  validateMoto,
};
