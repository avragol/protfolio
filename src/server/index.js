const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.get('/leads', async (req, res) => {
    try {
        // לוגיקה לאיסוף הלידים ממקור כלשהו

        const leads = []; // ממלאים את המערך עם הלידים שנאספו

        // שליחת מייל עם הלידים

        let transporter = nodemailer.createTransport({
            host: 'smtp.example.com',
            port: 587,
            secure: false,
            auth: {
                user: 'user@example.com',
                pass: 'password'
            }
        });

        let info = await transporter.sendMail({
            from: '"Leads Server" <leads@example.com>',
            to: 'manager@example.com',
            subject: 'New Leads',
            text: JSON.stringify(leads)
        });

        console.log("Message sent: %s", info.messageId);

        // החזרת תשובה

        res.send('Leads collected and emailed successfully');
    } catch (err) {
        res.send(err);
    }


});

app.listen(process.env.PORT || '3001', () => {
    console.log(`Leads server listening on port ${process.env.PORT || '3001'}`);
});