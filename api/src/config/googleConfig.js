const { google } = require('googleapis')
const jwt = require('jsonwebtoken');
require('dotenv').config()

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env

const googleConfig = {
  clientId: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  redirect: 'http://localhost:3000/google-auth'
};

const createConnection = () => {
  return new google.auth.OAuth2(
    googleConfig.clientId,
    googleConfig.clientSecret,
    googleConfig.redirect
  )
}

const defaultScope = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/calendar',
];

const getConnectionUrl = (auth) => {
  return auth.generateAuthUrl({
    access_type: 'offline',
    // promt: 'concent',
    scope: defaultScope,
  });
}

const urlGoogle = () => {
  const auth = createConnection();
  const url = getConnectionUrl(auth);
  return url
}

// const calendarCallback = (err, res) => {
//   if (err) return console.log('The API returned an error: ' + err);
//   const events = res.data.items;
//   if (events.length) {
//     console.log('Upcoming 10 events:');
//     events.map((event, i) => {
//       const start = event.start.dateTime || event.start.date;
//       console.log(`${start} - ${event.summary}`);
//     });
//   } else {
//     console.log('No upcoming events found.');
//   }
// }

const getUserTokens = async (code) => {
  const auth = createConnection();
  const { tokens } = await auth.getToken(code)
  // auth.setCredentials(tokens);
  // const calendar = google.calendar({ version: 'v3', auth });

  //   const list = calendar.events.list({
  //     calendarId: 'primary',
  //     timeMin: (new Date()).toISOString(),
  //     maxResults: 10,
  //     singleEvents: true,
  //     orderBy: 'startTime',
  //   }, calendarCallback);
  // console.log('list: ', list);

  const { id_token } = tokens;
  const decoded = jwt.decode(id_token)
  return ({
    email: decoded.email,
    picture: decoded.picture,
    given_name: decoded.given_name,
    family_name: decoded.family_name,
    tokens
  })
}

module.exports = {
  urlGoogle,
  getUserTokens
}

