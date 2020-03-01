const { singinSignup, onboarding } = require('./user');
const {
  upcomingEvents,
  createAppointment,
  getAppointments
} = require('./googleCal');
const { clientRefresh } = require('./clientRefresh');
const { tokenValidator } = require('./tokenValidator');
module.exports = {
  singinSignup,
  clientRefresh,
  onboarding,
  upcomingEvents,
  tokenValidator,
  createAppointment,
  getAppointments
};
