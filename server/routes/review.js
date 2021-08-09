import express from 'express';
const router = express.Router()

import { newAppt, userAppts } from '../controllers/appt.js'

router.post("/", newAppt);
router.get("/:id", userAppts)


export default router