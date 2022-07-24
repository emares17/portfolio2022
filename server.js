import express from 'express'
const app = express();
const PORT = 3000;
import cors from 'cors';
import router from './routes/router.js'

app.use(express.json())
app.use(cors())
app.use('/', express.static('public'))
app.use(router);

app.get('/hello', (req, res) => {
    res.status(200).send('Hello World');
});

app.listen(PORT);
console.log('Server started at http://localhost:' + PORT);