const { singinSignup, onboarding } = require('./user');
const { upcomingEvents, createEvent } = require('./googleCal');
const {
  createAppointment,
  getAppointments,
  updateAppointment,
  deleteAppointment
} = require('./appointmentCRUD');
const { getAppointmentsPatient } = require('./patient');
const { clientRefresh } = require('./clientRefresh');
const { tokenValidator } = require('./tokenValidator');
module.exports = {
  singinSignup,
  clientRefresh,
  onboarding,
  upcomingEvents,
  tokenValidator,
  createAppointment,
  getAppointments,
  updateAppointment,
  deleteAppointment,
  createEvent,
  getAppointmentsPatient
};
