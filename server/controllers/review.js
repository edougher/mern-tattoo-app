import express from "express";
import mongoose from "mongoose";

import Review from "../models/review.js";
import Appt from "../models/appt.js";

export const createReview = async (req, res) => {
  const review = req.body;
  // TODO
  // check if 'review.approved === true, if so change Review.status to Approved
  // this part might change in the future to have mutiple status' rather than just "Approved" and "Pending"
  // also update original Appt.status

  if (review.approved === true) {
    const filter = { _id: review.apptId };
    const update = { status: "Approved" };
    const newAppt = { new: true };
    const newReview = new Review({
      ...review, status: "Approved",
      createdAt: new Date().toISOString(),
    });
      try {
          const appt = await Appt.findOneAndUpdate(filter, update, newAppt);
          const resObject = { newReview, appt}
      await newReview.save();
      res.status(201).json(resObject);
    } catch (error) {
      console.log(error);
    }
  } else {
    const newReview = new Review({
      ...review,
      createdAt: new Date().toISOString(),
    });
    try {
      res.status(201).json(newReview);
    } catch (error) {
      console.log(error);
    }
  }

};

export const getReviews = async (req, res) => {
  const { id } = req.params
  console.log(id, "review controller");
  try {
    const appts = await Review.find({ userId: id }, (error, data) => {
      if (error) {
          console.log(error);
      } else {
          res.status(201).json(data)
      }
  })
    
  } catch (error) {
    
  }
}
