import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'

import userRouter from "./routes/user.js";
import apptRouter from "./routes/appt.js"

dotenv.config()
const app = express();
const router = express.Router()

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/appts', apptRouter)
app.use('/user', userRouter);
app.use('/review', reviewRouter)
app.use('/', userRouter)


const CONNECTION_URL = "mongodb://localhost/tatt_appt";
const PORT = process.env.PORT || 9000;

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT,() => {
  console.log("Server started...");
});

const con = mongoose.connection;
con.on("open", () => {
  console.log("connected...");
});

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)))
//   .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
