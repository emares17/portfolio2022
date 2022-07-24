import express from 'express'

import dotenv from 'dotenv'
dotenv.config();

import aws from 'aws-sdk'

const router = express.Router();
const ses = new aws.SES({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    accessSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-west-1'
});

router.post('/email', (req, res) => {
    const {email, message, name} = req.body;
    sesTest('estebanmares17@gmail.com', email, message, name).then((val) => {
        console.log('got this back', val)
        res.send('successful');
    })
    .catch(err => {
        res.send('/error' + err);
    })
});

function sesTest(emailTo, emailFrom, message, name) {
    const params = {
        Destination: {
            ToAddresses: [emailTo]
        },
        Message: {
            Body: {
                Text: {
                    Data: 'From Contact: ' + name + '\n' + message
                }
            },
            Subject: {
                Data: 'Name: ' + emailFrom
            }
        },
        Source: 'estebanmares17@gmail.com'
    };
    return ses.sendEmail(params).promise();
}

export default router;