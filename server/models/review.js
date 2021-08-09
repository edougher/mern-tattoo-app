import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    apptId: String,
    cost: Number,
    time: Number,
    comments: String,
    approved: Boolean,
    status: {type: String, default: "Pending"},
    createdAt: {
        type: Date,
        default: new Date(),
      },
})

var Review = mongoose.model("Review", reviewSchema);


export default Review;