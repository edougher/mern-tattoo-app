import express from 'express';
import mongoose from 'mongoose';

import Appt from '../models/appt.js'

export const newAppt = async (req, res) => {
    const appt = req.body
    const newAppt = new Appt({ ...appt, createdAt: new Date().toISOString()})
    try {
        await newAppt.save()
        res.status(201).json(newAppt)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const userAppts = async (req, res) => {
    const { id } = req.params
    console.log(id)
    if (id === "610d95968d9e53b70d5c055b") {
        const allRequest = await Appt.find((error, data) => {
            if (error) {
                console.log(error);
            } else {
                res.status(201).json(data)
            }
        })
    } else {
        const appts = await Appt.find({ userId: id }, (error, data) => {
            if (error) {
                console.log(error);
            } else {
                res.status(201).json(data)
            }
        })
    }
    
}

