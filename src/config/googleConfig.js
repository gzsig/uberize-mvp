const { google } = require('googleapis')
require('dotenv').config()

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env

const googleConfig = {
  clientId: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  redirect: 'http://localhost:3000/google-auth'
};

function createConnection() {
  return new google.auth.OAuth2(
    googleConfig.clientId,
    googleConfig.clientSecret,
    googleConfig.redirect
  )
}

const defaultScope = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/calendar',
];

function getConnectionUrl(auth) {
  return auth.generateAuthUrl({
    access_type: 'offline',
    // promt: 'concent',
    scope: defaultScope,
  });
}

function urlGoogle() {
  const auth = createConnection();
  const url = getConnectionUrl(auth);
  console.log(url);
  return url
}

async function getTokens() {
  const auth = createConnection();
  let code = '4/wAHpQP_VAysdTUA8QyfmFh-XjQeM46gaAQMytILNGpD8L2NXAryz10CI8ZHEmgoWR0ieKVrUtvqrh1CsNWe-w8g';
  const tokens = await auth.getToken(code)
  console.log(tokens);
}

module.exports = {
  urlGoogle,
  getTokens
}

