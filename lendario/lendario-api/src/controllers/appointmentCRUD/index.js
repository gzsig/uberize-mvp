const { createAppointment } = require('./createAppointment');
const { getAppointments } = require('./getAppointments');
const { updateAppointment } = require('./updateAppointment');
const { deleteAppointment } = require('./deleteAppointment');
module.exports = {
  createAppointment,
  getAppointments,
  updateAppointment,
  deleteAppointment
};
