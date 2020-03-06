const gcal = require('google-calendar');
const { Appointment, User } = require('../../models');
const createEvent = (req, res, next) => {
  console.log(req.body);
  const {
    username,
    startTime,
    endTime,
    pemail,
    pname,
    appointmentId
  } = req.body;
  Appointment.findOne({ _id: appointmentId })
    .then(existingAppointment => {
      const { userAccessToken } = existingAppointment;
      User.findById(existingAppointment.user)
        .then(existingUser => {
          const google_calendar = new gcal.GoogleCalendar(userAccessToken);

          let event = {
            summary: `${existingAppointment.name} - ${existingUser.given_name} & ${pname}`,
            location: `${existingAppointment.location}`,
            description:
              "A chance to hear more about Google's developer products.",
            start: {
              dateTime: new Date(startTime),
              timeZone: 'America/Sao_Paulo'
            },
            end: {
              dateTime: new Date(endTime),
              timeZone: 'America/Sao_Paulo'
            },
            recurrence: [],
            attendees: [{ email: existingUser.email }, { email: pemail }],
            reminders: {
              useDefault: false,
              overrides: [
                { method: 'email', minutes: 24 * 60 },
                { method: 'popup', minutes: 10 }
              ]
            }
          };

          google_calendar.events.insert(
            'primary',
            event,
            null,

            function(err, event) {
              if (err) {
                console.log(
                  'There was an error contacting the Calendar service: ' +
                    JSON.stringify(err)
                );
                res.status(500).json(err);
                return;
              }
              res.status(200).json({message: 'event created :)', link: event.htmlLink})
              console.log('Event created: %s', event.htmlLink);
            }
          );
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};
module.exports = {
  createEvent
};
