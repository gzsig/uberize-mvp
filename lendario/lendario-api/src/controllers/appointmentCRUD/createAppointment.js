const { Appointment } = require('../../models');

const createAppointment = (req, res, next) => {
  const { userId } = req.decoded;
  console.log(req.body);
  console.log('id', userId);

  const { name, description, duration, location } = req.body.calAppointment;
  Appointment.create({
    user: userId,
    name,
    description,
    duration,
    location
  })
    .then(appointment => {
      console.log(appointment);
      res.status(200).json({ message: 'New appointment created :)' });
    })
    .catch(err => {
      res.status(500).json({
        message: 'Sorry we encountered an error on our end :/',
        error: err
      });
    });
};

module.exports = {
  createAppointment
};
