const { google } = require('googleapis')
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

 const getTokens = async (code) => {
  const auth = createConnection();
  const tokens = await auth.getToken(code)
  console.log(tokens);
}

module.exports = {
  urlGoogle,
  getTokens
}

