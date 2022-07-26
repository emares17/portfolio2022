import express, { urlencoded } from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config();

import aws from 'aws-sdk'

const urlendcodedParser = bodyParser.urlencoded({ extended: false });

const router = express.Router();
const ses = new aws.SES({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    accessSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-west-1'
});

router.post('/email', urlendcodedParser, (req, res) => {
    const {email, message, firstName, lastName} = req.body;
    sesTest('estebanmares17@gmail.com', email, message, firstName, lastName).then((val) => {
        console.log('got this back', val)
        res.send('successful');
    })
    .catch(err => {
        res.send('/error' + err);
    })
});

function sesTest(emailTo, emailFrom, message, firstName, lastName) {
    const params = {
        Destination: {
            ToAddresses: [emailTo]
        },
        Message: {
            Body: {
                Text: {
                    Data: 'From Contact: ' + firstName + " " + lastName + '\n' + message
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
