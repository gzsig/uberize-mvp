const express = require('express');
const router = express.Router();
const passport = require('passport');
const {
  upcomingEvents,
  singinSignup,
  clientRefresh,
  onboarding,
  tokenValidator,
  createAppointment,
  getAppointments,
  updateAppointment,
  deleteAppointment,
  createEvent,
  getAppointmentsPatient,
  createAppointmentsPatient
} = require('../controllers');
const { authMiddleware } = require('../resources');

const defaultScope = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/calendar'
];

router.get('/', (req, res, next) => {
  res.send('welcome');
});
router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: defaultScope,
    accessType: 'offline'
    // prompt: 'consent',
  })
);
router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/', session: false }),
  singinSignup
);
router.post('/onboarding', authMiddleware, tokenValidator, onboarding);
router.post('/refresh', authMiddleware, tokenValidator, clientRefresh);

// GOOGLE CALENDAR EVENTS
router.get(
  '/google/cal/events',
  authMiddleware,
  tokenValidator,
  upcomingEvents
);
router.post(
  '/google/cal/event/create',
  authMiddleware,
  tokenValidator,
  createEvent
);

// MY APPOINTMENTS
router.post(
  '/my/appointment/new',
  authMiddleware,
  tokenValidator,
  createAppointment
);
router.patch(
  '/my/appointment/edit',
  authMiddleware,
  tokenValidator,
  updateAppointment
);
router.delete(
  '/my/appointment/delete/:id',
  authMiddleware,
  tokenValidator,
  deleteAppointment
);
router.get('/my/appointments', authMiddleware, tokenValidator, getAppointments);

// USER SEE APPOINTMENTS
router.get('/patient/appointments/:username', getAppointmentsPatient);
router.get('/patient/appointment/:id', createAppointmentsPatient);

router.get('/teste', (req, res) => {
  res.status(200).json({ message: 'we are online' });
});

module.exports = {
  router
};
