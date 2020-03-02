const { singinSignup, onboarding } = require('./user');
const { upcomingEvents } = require('./googleCal');
const {
  createAppointment,
  getAppointments,
  updateAppointment,
  deleteAppointment
} = require('./appointmentCRUD');
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
  deleteAppointment
};
