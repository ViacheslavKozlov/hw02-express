/* eslint-disable quotes */
/* eslint-disable semi */
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async data => {
  const email = { ...data, from: "slavick.cv@gmail.com" };
  await sgMail.send(email);
};

module.exports = sendEmail;
