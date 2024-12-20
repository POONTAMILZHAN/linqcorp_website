const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;
/*
const cors = require('cors');
app.use(cors()); // Allow requests from any origin


            npm install cors

*/

app.use(bodyParser.json()); // Parse JSON data

// Set up nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Your Gmail address
    pass: 'your-email-password',  // Your Gmail password (or app-specific password)
  },
});

// Post endpoint to send email
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'linqcorp@gmail.com', // The recipient email
    subject: subject,
    text: `Message from: ${name}\nEmail: ${email}\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email: ' + error.message);
    }
    res.status(200).send('Message sent successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
