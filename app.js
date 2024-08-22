import express from "express";
import { cityRoute, countryRoute, tripsRoute, userRoute } from "./routes/index.js";
import session from 'express-session';
const app = express();


app.use(session({
    secret: process.env.SESSION_SECRET ,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' } 
  }));

  
app.use('/api/v1/country', countryRoute)


app.use('/api/v1/city', cityRoute)
app.use('/api/v1/auth', userRoute)
app.use('/api/v1/trips', tripsRoute)
app.use('/api/v1', (req, res) => {
  return res.json({ message: 'Welcome to the API!' });
});

export default app