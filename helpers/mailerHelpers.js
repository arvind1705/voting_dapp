const nodemailer = require('nodemailer');
const env = require('dotenv').config();
const helpers = require('../helpers/helpers.js');
const dbHelper = require('../database/dbHelpers.js');
const fs = require('fs');
const handlebars = require('handlebars');
const path = require('path');


const readHTMLFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, {encoding: 'utf-8'}, function(err, file) {
      if (err) { 
        reject(err)
      } 
      else { 
        resolve(file) 
      }
    }); 
  });
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: false, 
  auth: {
      user: process.env.EMAIL_PASSWORD, 
      pass: process.env.EMAIL_ACCOUNT
  }
});

const sendPasswordReset = (email, token) => {
  return new Promise((resolve, reject) => {
    readHTMLFile(path.join(__dirname, '../client/src/templates/resetPasswordEmail.html'))
    .then(template => {
      let compiler = handlebars.compile(template);
      let replacements = {
        resetLink: 'http://localhost:3000' + '/reset/' + token
      };
      let templateToSend = compiler(replacements);
      let mailPasswordOptions = {
        from: '"AMPS" <ampsblockchain@gmail.com>', 
        to: `${email}`, 
        subject: 'Reset Password', 
        html: templateToSend
      }; 

      transporter.sendMail(mailPasswordOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      });
    }); 
  });
}

const sendEmailCodes = (emails, pollId, ballotName, start, end, orgName) => {
  start = helpers.formatDate(start);
  end = helpers.formatDate(end);
  console.log(emails)
  return new Promise((resolve, reject) => {
    readHTMLFile(path.join(__dirname, '../client/src/templates/voterCodeEmail.html'))
    .then(template => {
      let compiler = handlebars.compile(template);
      let pollTimingMessage = 'The ballot opens on ' + start + ' and closes on ' + end + '.'
      if (start === null || end === null) {
        pollTimingMessage = 'The ballot is open now. ' + orgName + ' will close the ballot once votes are received.'
      }
      emails.forEach((recipient) => {
        let code = helpers.createUniqueId();
        let replacements = {
          voterCode: code,
          ballotName: ballotName,
          orgName: orgName,
          pollTimingMessage: pollTimingMessage
        };
        let templateToSend = compiler(replacements);
        let emailCodeOptions = {
          from: '"AMPS" <ampsblockchain@gmail.com>', 
          to: `${recipient}`, 
          subject: `Submit a vote for ${ballotName}`, 
          html: templateToSend
        };
        // console.log(emailCodeOptions)
        dbHelper.saveVoterID(code, pollId)
        transporter.sendMail(emailCodeOptions, (error, info) => {
          if (error) {
            reject(error);
          } else {
            resolve(info);
          }
        });
      });
    }); 
  });
}

module.exports = {
  sendPasswordReset: sendPasswordReset,
  sendEmailCodes: sendEmailCodes
}
