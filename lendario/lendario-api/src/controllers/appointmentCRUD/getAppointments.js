const { Appointment } = require('../../models');

const getAppointments = (req, res, next) => {
  const { userId } = req.decoded;
  Appointment.find({ user: userId })
    .then(appointments => {
      if (appointments.length) {
        res.status(200).json({
          message: `This user has ${appointments.length} appointment(s)`,
          appointments
        });
      } else {
        res.status(404).json({ message: 'No appointments were found :(' });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({
          message: 'Sorry we encountered an error on our end :/',
          error: err
        });
    });
};

module.exports = {
  getAppointments
};
