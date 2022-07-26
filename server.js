import express from 'express'
const app = express();
const PORT = 3000;
import cors from 'cors';
import router from './routes/router.js'

app.use(express.json())
app.use(cors())
app.use('/', express.static('public'))
app.use(router);

app.post("/", (req, res) => {
    console.log(req.body);
    const { email } = req.body;
    res.status(200).json({ email });
    res.redirect('http://localhost:3000')
  });

app.listen(PORT);
console.log('Server started at http://localhost:' + PORT);