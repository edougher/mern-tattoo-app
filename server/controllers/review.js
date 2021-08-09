import express from 'express';
import mongoose from 'mongoose';

import Review from '../models/review.js'

export const createReview = async (req, res) => {
    const review = req.body
    // check if 'review.approved === true, if so change Review.status to Approved
    // this part might change in the future to have mutiple status' rather than just "Approved" and "Pending"
    // also update original Appt.status
    const newReview = new Review({ ...review, createdAt: new Date().toISOString()})

    try {
        await newReview.save()
        res.status(201).json(newReview)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}