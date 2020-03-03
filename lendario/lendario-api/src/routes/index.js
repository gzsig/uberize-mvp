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
  createEvent
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
router.post(
  '/google/cal/appointment/new',
  authMiddleware,
  tokenValidator,
  createAppointment
);
router.patch(
  '/google/cal/appointment/edit',
  authMiddleware,
  tokenValidator,
  updateAppointment
);
router.delete(
  '/google/cal/appointment/delete/:id',
  authMiddleware,
  tokenValidator,
  deleteAppointment
);
router.get(
  '/google/cal/appointments',
  authMiddleware,
  tokenValidator,
  getAppointments
);

module.exports = {
  router
};
