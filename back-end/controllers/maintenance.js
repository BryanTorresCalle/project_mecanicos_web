const ServicePG = require("../services/postgres");

let validateMaintenance = (maintenance) => {
  if (!maintenance) {
    throw {
      ok: false,
      mensaje: "La información del mantenimiento es obligatoria",
    };
  } else if (!maintenance.plate) {
    throw {
      ok: false,
      mensaje: "La placa es obligatoria",
    };
  } else if (!maintenance.idMechanic) {
    throw {
      ok: false,
      mensaje: "La cedula del mecanico es obligatoria",
    };
  } else if (!maintenance.date) {
    throw {
      ok: false,
      mensaje: "La fecha es obligatoria",
    };
  }
};

let showMaintenances = async () => {
  let _service = new ServicePG();
  let sql = `SELECT id_mecanico, placa, fecha, trabajos_realizados, horas_invertidas
    FROM public.mantenimientos`;
  let res = await _service.runsql(sql);
  return res;
};

let showMaintenance = async (idMechanic,plate, date) => {
  let _service = new ServicePG();
  let sql = `SELECT id_mecanico, placa, fecha, trabajos_realizados, horas_invertidas
    FROM public.mantenimientos where id_mecanico = $1 and placa = $2 and fecha = $3`;
  let values = [idMechanic,plate,date];
  let res = await _service.runsql(sql, values);
  return res;
};

let createMaintenance = async (maintenance) => {
  let _service = new ServicePG();
  let sql = `INSERT INTO public.mantenimientos(
        id_mecanico, placa, fecha, trabajos_realizados, horas_invertidas)
        VALUES ($1, $2, $3, $4, $5)`;
  let values = [
    maintenance.idMechanic,
    maintenance.plate,
    maintenance.date,
    maintenance.workDone,
    maintenance.hours,
  ];
  let res = await _service.runsql(sql, values);
  return res;
};

let deleteMaintenance = (idMechanic,palte,date) => {
  let _service = new ServicePG();
  let sql = `DELETE FROM public.mantenimientos
    WHERE id_mecanico = $1 and placa = $2 and fecha = $3` ;
  let values = [idMechanic, plate, date];
  let res = _service.runsql(sql, values);
  return res;
};

let updateMaintenance = async (
  maintenance,
  idMechanic,
  plate,
  date
) => {
  let _service = new ServicePG();
  let sql = `UPDATE public.mantenimientos
	SET trabajos_realizados=$1, horas_invertidas=$2
    WHERE id_mecanico=$3 and placa = $4 and fecha =$5`;
  let values = [
    maintenance.workDone,
    maintenance.hours,
    idMechanic,
    plate,
    date,
  ];
  let res = await _service.runsql(sql, values);
  return res;
};

module.exports = {
  updateMaintenance,
  showMaintenances,
  showMaintenance,
  validateMaintenance,
  deleteMaintenance,
  createMaintenance,
};
