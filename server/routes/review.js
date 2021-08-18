import express from 'express';
const router = express.Router()

import { createReview, getReviews } from '../controllers/review.js'

router.post("/", createReview);
router.get("/:id", getReviews)


export default router