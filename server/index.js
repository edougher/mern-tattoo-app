import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//import userRouter from "./routes/user.js";

const app = express()

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

//app.use("/user", userRouter);

const CONNECTION_URL = 'mongodb+srv://aaronwakeup:Helloworld@sd86@cluster0.rbpc1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//const CONNECTION_URL = 'mongodb+srv://aaronwakeup86:aaronwakeup86123@cluster0.rbpc1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);



