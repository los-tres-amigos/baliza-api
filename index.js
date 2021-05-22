import express from 'express';
import router from './routes/index.js';

const app = express();
const port = 8080;

app.use('/', router);


app.listen(port, () => { console.log(`Baliza listening at http://localhost:${port}`)});