const gcal = require('google-calendar');

const upcomingEvents = (req, res) => {
  const today = new Date();
  const { accessToken } = req.decoded;
  const google_calendar = new gcal.GoogleCalendar(accessToken);
  google_calendar.events.list(
    'primary',
    {
      timeMin: today.toISOString(),
      timeMax: new Date(today.getFullYear(), today.getMonth() + 1, today.getDate()).toISOString(),
      singleEvents: true,
      orderBy: 'startTime'
    },
    (err, events) => {
      res.status(200).json(events.items);
    }
  );
}

module.exports = {
  upcomingEvents
}