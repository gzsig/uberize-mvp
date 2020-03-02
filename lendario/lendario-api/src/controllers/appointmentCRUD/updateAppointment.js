const { Appointment } = require('../../models');

const updateAppointment = (req, res, next) => {
  const { name, description, duration, location } = req.body.calAppointment;
  Appointment.updateOne(
    { _id: req.body.id },
    { name, description, duration, location }
  )
    .then(appointment => {
      console.log(appointment);
      res.status(200).json({ message: 'Appointment updated :)' });
    })
    .catch(err => {
      res.status(500).json({
        message: 'Sorry we encountered an error on our end :/',
        error: err
      });
    });
};

module.exports = {
  updateAppointment
};
