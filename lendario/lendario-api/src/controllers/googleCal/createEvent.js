const gcal = require('google-calendar');
const createEvent = (req, res, next) => {

  const { accessToken } = req.decoded;
  const google_calendar = new gcal.GoogleCalendar(accessToken);
  // google_calendar.events.list(
  //   'primary',
  //   {
  //     timeMin: today.toISOString(),
  //     timeMax: new Date(today.getFullYear(), today.getMonth() + 1, today.getDate()).toISOString(),
  //     singleEvents: true,
  //     orderBy: 'startTime'
  //   },
  //   (err, events) => {
  //     res.status(200).json(events.items);
  //   }
  // );

  var event = {
    'summary': 'Google I/O 2015',
    'location': '800 Howard St., San Francisco, CA 94103',
    'description': 'A chance to hear more about Google\'s developer products.',
    'start': {
      'dateTime': '2020-03-03T09:00:00-07:00',
      'timeZone': 'America/Los_Angeles',
    },
    'end': {
      'dateTime': '2020-03-03T17:00:00-07:00',
      'timeZone': 'America/Los_Angeles',
    },
    'recurrence': [
      'RRULE:FREQ=DAILY;COUNT=2'
    ],
    'attendees': [
      {'email': 'lpage@example.com'},
      {'email': 'sbrin@example.com'},
    ],
    'reminders': {
      'useDefault': false,
      'overrides': [
        {'method': 'email', 'minutes': 24 * 60},
        {'method': 'popup', 'minutes': 10},
      ],
    },
  };
  google_calendar.events.insert('primary',event,null
    //{
    //  calendarId: 'primary',
    //  resource: event,
    //}
    , function (err, event) {
    if (err) {
      console.log('There was an error contacting the Calendar service: ' + err);
      return;
    }
    console.log('Event created: %s', event.htmlLink);
  })


  // function execute() {
  //   return gapi.client.calendar.events.insert({
  //     "resource": {
  //       "end": {},
  //       "start": {}
  //     }
  //   })
  //     .then(function (response) {
  //       // Handle the results here (response.result has the parsed body).
  //       console.log("Response", response);
  //     },
  //       function (err) { console.error("Execute error", err); });
  // }


  // google_calendar.events.insert({
  //   calendarId: 'primary',
  //   resource: event,
  // }).then(function (response) {
  //   // Handle the results here (response.result has the parsed body).
  //   console.log("Response", response);
  // },
  //   function (err) { console.error("Execute error", err); });


  // google_calendar.events.insert({
  //   calendarId: 'primary',
  //   resource: event,
  // }).then(res => {
  //   console.log(res);

  // }).catch(err =>{
  //   console.log(err);

  // })

}

// var event = {
//   'summary': 'Google I/O 2015',
//   'location': '800 Howard St., San Francisco, CA 94103',
//   'description': 'A chance to hear more about Google\'s developer products.',
//   'start': {
//     'dateTime': '2015-05-28T09:00:00-07:00',
//     'timeZone': 'America/Los_Angeles',
//   },
//   'end': {
//     'dateTime': '2015-05-28T17:00:00-07:00',
//     'timeZone': 'America/Los_Angeles',
//   },
//   'recurrence': [
//     'RRULE:FREQ=DAILY;COUNT=2'
//   ],
//   'attendees': [
//     { 'email': 'lpage@example.com' },
//     { 'email': 'sbrin@example.com' },
//   ],
//   'reminders': {
//     'useDefault': false,
//     'overrides': [
//       { 'method': 'email', 'minutes': 24 * 60 },
//       { 'method': 'popup', 'minutes': 10 },
//     ],
//   },
// };

// calendar.events.insert({
//   auth: auth,
//   calendarId: 'primary',
//   resource: event,
// }, function (err, event) {
//   if (err) {
//     console.log('There was an error contacting the Calendar service: ' + err);
//     return;
//   }
//   console.log('Event created: %s', event.htmlLink);
// });


module.exports = {
  createEvent
}