import express from 'express';
import route from '../routes/route.js';

const routes = express.Router();


routes.use('/route', route);

routes.get('/', (req, res) => { res.send('hello world'); });

export default routes;