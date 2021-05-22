import express from 'express';
import cors from 'cors';
import router from './routes/index.js';

const app = express();
const port = 8080;

app.use(cors());
app.use('/', router);


app.listen(port, () => { console.log(`Baliza listening at http://localhost:${port}`)});

export default app;