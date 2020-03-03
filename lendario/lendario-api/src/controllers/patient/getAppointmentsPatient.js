const { User, Appointment } = require('../../models');

const getAppointmentsPatient = (req, res) => {
  const { username } = req.params;
  console.log('username --->', username);
  User.findOne({ username })
    .then(existingUser => {
      console.log(existingUser);
      Appointment.find({ user: existingUser._id })
        .then(appointments => {
          console.log('appointments:', appointments);
          res
            .status(200)
            .json({
              message: `This user has ${appointments.length} appointment(s)`,
              appointments
            });
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  res.status(200).end;
};

module.exports = { getAppointmentsPatient };
