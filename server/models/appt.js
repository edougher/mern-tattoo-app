import mongoose from "mongoose";

const apptSchema = mongoose.Schema({
  userId: String,
  location: String,
  height: Number,
  width: Number,
  colors: Number,
  comments: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    defualt: new Date(),
  },
});

var Appt = mongoose.model("Appt", apptSchema);

export default Appt;
