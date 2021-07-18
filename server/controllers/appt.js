import express from 'express';
import mongoose from 'mongoose';

import Appt from '../models/appt.js'

export const newAppt = async (req, res) => {
    const appt = req.body
    console.log(appt);
    const newAppt = new Appt({ ...appt, createdAt: new Date().toISOString() })
    try {
        await newAppt.save()
        res.status(201).json(newAppt)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

