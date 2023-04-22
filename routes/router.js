const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.get('/', async (req,res) => {
    try {
        res.render('index');
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error');
    }
});

router.post('/email', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;

    const trasporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'estebanmares17@gmail.com',
            pass: process.env.GMAIL_PASS
        }
    });

    const mailOption = {
        from: email,
        to: 'estebanmares17@gmail.com',
        subject: 'Contact Form Submission',
        html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`
    };

    trasporter.sendMail(mailOption, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Error');
        } else {
            console.log('Email Sent: ' + info.response);
            res.redirect('/');
        }
    });
});

module.exports = router;