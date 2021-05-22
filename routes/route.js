import express from 'express';
import routeController from '../controllers/route.js';


const router = express.Router();

router.get('/', (req, res) => { routeController.list(req, res) });

export default router;