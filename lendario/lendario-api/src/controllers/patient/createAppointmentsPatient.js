require('dotenv').config();
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
const { User } = require('../../models/');
const { google } = require('googleapis');
const moment = require('moment');

const createAppointmentsPatient = (req, res) => {
  console.log("hereeee");
  res.status(200).end
  
};

module.exports = {
  createAppointmentsPatient
};




// const googleConfig = {
//   clientId: GOOGLE_CLIENT_ID,
//   clientSecret: GOOGLE_CLIENT_SECRET,
//   redirect: 'http://localhost:3000/google-auth'
// };

// const createConnection = () => {
//   return new google.auth.OAuth2(
//     googleConfig.clientId,
//     googleConfig.clientSecret,
//     googleConfig.redirect
//   );
// };

// const tokenValidator = (req, res, next) => {
//   console.log('\n1 - will validate TOKEN');
//   const auth = createConnection();
//   User.findById(req.decoded.userId)
//     .then(user => {
//       const token = user.accessToken;
//       const rtoken = user.refreshToken;
//       const expiry_date = user.expiry_date;
//       console.log('2 - got user TOKENS');
//       console.log('token: ', token);
//       console.log('rtoken: ', rtoken);
//       console.log('expiry_date: ', expiry_date);
//       console.log(
//         'moment:     ',
//         moment()
//           .subtract(expiry_date)
//           .format('X')
//       );
//       if (
//         moment()
//           .subtract(expiry_date)
//           .format('X') > -300
//       ) {
//         console.log('3 - less than 5min, will reset');
//         auth.setCredentials({
//           // access_token: token,
//           refresh_token: rtoken
//         });
//         // request a new token
//         auth.refreshAccessToken(function(err, tokens) {
//           if (err) return next(err);
//           console.log('4 - success on new TOKEN');
//           //save the new token and expiry_date
//           User.findOneAndUpdate(
//             { _id: req.decoded.userId },
//             {
//               accessToken: tokens.access_token,
//               expiry_date: tokens.expiry_date
//             },
//             {
//               new: true,
//               runValidators: true
//             },
//             function(err, doc) {
//               if (err) return next(err);
//               console.log('5 - saved new TOKENS');
//               next();
//             }
//           );
//         });
//       }
//     })
//     .catch(err => console.log(err));

//   // subtract current time from stored expiry_date and see if less than 5 minutes (300s) remain
//   next();
// };

