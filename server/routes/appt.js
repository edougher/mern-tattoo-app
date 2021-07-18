import express from 'express';
const router = express.Router()

import { newAppt } from '../controllers/appt.js'

router.post("/", newAppt);


export default router