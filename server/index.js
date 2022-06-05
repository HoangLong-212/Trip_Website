import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from "mongoose";
import posts from './routers/posts.js'
import Province from './routers/Province.js'
import Place from './routers/Place.js';
import Hotel from './routers/Hotel.js';
import FoodAndDrink from './routers/FoodAndDrink.js';
import Attraction from './routers/Attraction.js';
import Accounts from './routers/Account.js';
import Profiles from './routers/Profile.js'





const app = express();
const PORT = process.env.port || 5000;

const URI =
  "mongodb+srv://admin:0nEnYGe9LkPeVJbl@cluster0.prgvr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb'}));
app.use(cors());

app.use("/accounts", Accounts);
app.use('/posts', posts);
app.use('/province', Province);
app.use('/place', Place);
app.use('/hotel', Hotel);
app.use('/foodAndDrink', FoodAndDrink);
app.use('/attraction', Attraction);
app.use('/profiles', Profiles);



mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
