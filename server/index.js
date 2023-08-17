const express = require('express');
const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');
const auth = {
    auth: {
        api_key: process.env.REACT_APP_MAILGUN_KEY,
        domain: process.env.REACT_APP_MAILGUN_DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailgun(auth));


const app = express();

app.get('/leads', async (req, res) => {
    try {
        const { leadEmail, content } = req;
        const mailOptions = {
            from: '<From Protfolio> avragol@gmail.com',
            to: 'avragol@gmail.com',
            subject: 'Test email',
            text: 'This is a test email sent using Mailgun from Node.js'
        };

        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                console.log('Error: ', err);
            } else {
                console.log('Email sent!', data);
                res.send(data)
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }


});

app.listen(process.env.PORT || '3001', () => {
    console.log(`Leads server listening on port ${process.env.PORT || '3001'}`);
});