const { Appointment } = require('../../models');

const deleteAppointment = (req, res, next) => {
  const { userId } = req.decoded;
  console.log('params', req.params);

  Appointment.deleteOne({
    _id: req.params.id
  })
    .then(appointment => {
      console.log(appointment);
      res.status(200).json({ message: 'Appointment deleted :)' });
    })
    .catch(err => {
      res.status(500).json({
        message: 'Sorry we encountered an error on our end :/',
        error: err
      });
    });
};

module.exports = {
  deleteAppointment
};
