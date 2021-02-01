'use strict';

const config = require('../config');
const sgMail = require('sendgrid')(config.sendgridKey);

exports.send = async (to, subject, body) => {
  sgMail.send(
    {
      to: to,
      from: 'murillo.welsi@gmail.com',
      subject: subject,
      text: 'and easy to do anywhere, even with Node.js',
      html: body
    }
  );
}