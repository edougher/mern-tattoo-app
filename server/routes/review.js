import express from 'express';
const router = express.Router()

import { createReview } from '../controllers/review.js'

router.post("/", createReview);
//router.get("/:id", userAppts)


export default router