const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendVerificationEmail = (to, code) => {
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5;">
      <h2 style="color: #1e88e5;">Welcome to Shree Nabin Mobile And Multi Suppliers!</h2>
      <p>Hi there,</p>
      <p>Thank you for registering with <strong>Shree Nabin Mobile And Multi Suppliers</strong>. We're here to make mobile repair booking and tracking easy and fast.</p>
      <p>Your email verification code is:</p>
      <h1 style="color: #4caf50; font-size: 28px;">${code}</h1>
      <p>Please enter this code on the website to verify your email and activate your account.</p>
      <p>If you didn’t request this, just ignore this message.</p>
      <br/>
      <p>📱 Shree Nabin Mobile And Multi Suppliers Team</p>
      <small style="color: gray;">This is an automated message. Please do not reply.</small>
    </div>
  `;

  return transporter.sendMail({
    from: `"Shree Nabin Mobile And Multi Suppliers" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Verify Your Email - Shree Nabin Mobile And Multi Suppliers",
    html,
  });
};



  module.exports = { sendVerificationEmail };
