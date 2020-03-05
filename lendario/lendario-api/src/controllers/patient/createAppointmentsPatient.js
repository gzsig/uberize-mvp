require('dotenv').config();
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
const { User, Appointment } = require('../../models/');
const { google } = require('googleapis');
const moment = require('moment');
const axios = require('axios');
const gcal = require('google-calendar');

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
  );
};

const free = busy => {
  let freeSlots = [];
  let startDate = new Date();
  let endDate = new Date();
  endDate.setMonth(startDate.getMonth() + 1);

  for (let i = 0; i < busy.length; i++) {
    if (i === 0 && startDate < busy[i].start) {
      freeSlots.push({ start: startDate, end: busy[i].start });
    } else if (i === 0) {
      startDate = busy[i].end;
    } else if (busy[i - 1].end < busy[i].start) {
      freeSlots.push({ start: busy[i - 1].end, end: busy[i].start });
    }
    if (busy.length === i + 1 && busy[i].end < endDate) {
      freeSlots.push({ start: busy[i].end, end: endDate });
    }
  }
  return freeSlots;
};



const OrganizeSlot = freeSlots => {
  let slots = [];
  let slotSize = 1;
  for (let i = 0; i < freeSlots.length; i++) {
    console.log('for:', i);
    let j = 0;
    console.log('start', new Date(freeSlots[i].start).getHours());
    console.log('end', new Date(freeSlots[i].end).getHours());
    if (
      new Date(freeSlots[i].start).getHours() + slotSize <
      new Date(freeSlots[i].end).getHours()
    ) {
      while (
        new Date(freeSlots[i].start).getHours() + j <
        new Date(freeSlots[i].end).getHours()
      ) {
        console.log('entrei no while');

        slots.push({
          start: new Date(freeSlots[i].start).setHours(
            new Date(freeSlots[i].start).getHours() + j
          ),
          end: new Date(freeSlots[i].start).setHours(
            new Date(freeSlots[i].start).getHours() + j + slotSize
          )
        });
        j += slotSize;
      }
    }
  }
  return slots;
};



const createAppointmentsPatient = (req, res) => {
  const auth = createConnection();
  Appointment.findById(req.params.id)
    .then(existingAppointment => {
      console.log(existingAppointment);
      User.findById(existingAppointment.user)
        .then(existingUser => {
          console.log('USER:', existingUser);
          const rtoken = existingUser.refreshToken;
          auth.setCredentials({
            // access_token: token,
            refresh_token: rtoken
          });

          console.log(
            'MOMENT:',
            moment()
              .subtract(existingAppointment.expiry_date)
              .format('X')
          );

          if (
            moment()
              .subtract(existingAppointment.expiry_date)
              .format('X') > -300
          ) {
            // request a new token
            auth.refreshAccessToken(function(err, tokens) {
              if (err) return next(err);
              console.log('success on new TOKEN not loggedin');
              //save the new token and expiry_date
              Appointment.findOneAndUpdate(
                { _id: existingAppointment._id },
                {
                  userAccessToken: tokens.access_token,
                  expiry_date: tokens.expiry_date
                },
                {
                  new: true,
                  runValidators: true
                },
                function(err, doc) {
                  if (err) return next(err);
                  console.log('saved new TOKENS not loggedin');
                }
              );
            });
          }
          const google_calendar = new gcal.GoogleCalendar(
            existingAppointment.userAccessToken
          );
          //To AQUI
          let startDate = new Date();
          let nextDay = startDate.getDate() + 30;
          let month = startDate.getMonth();
          let endDate = new Date(2020, month, nextDay);

          google_calendar.freebusy.query(
            {
              items: [
                {
                  id: 'primary'
                }
              ],
              timeMin: startDate.toISOString(),
              timeMax: endDate.toISOString(),
              timeZone: 'America/Sao_Paulo'
            },
            {
              fields: 'calendars,groups,kind,timeMax,timeMin',
              alt: 'json'
            },
            function(err, data) {
              if (err) return console.log(err);
              // console.log('calendar data: =====>', data.calendars.primary);
              let freeTime = free(data.calendars.primary.busy)
              let slots = OrganizeSlot(freeTime);
              res.status(200).json({slots});

            }
          );
        })

        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });

  res.status(200).end;
};

module.exports = {
  createAppointmentsPatient
};
