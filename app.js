import express from "express";
import { cityRoute, countryRoute, tripsRoute, userRoute } from "./routes/index.js";
import session from 'express-session';
import cors from 'cors';
import RedisStore from "connect-redis";
import createClient  from "ioredis";


const app = express();

// const redisClient = new createClient({
//   url: process.env.REDIS_URL
// });

// redisClient.connect().catch(console.error);

// app.use(session({
//   store: new RedisStore({ client: redisClient }),
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false,
//   cookie: { secure: process.env.NODE_ENV === 'production' }
// }));

app.use(cors({
  origin: 'http://localhost:8081',
  credentials: true
}));

  
app.use('/api/v1/country', countryRoute)


app.use('/api/v1/city', cityRoute)
app.use('/api/v1/auth', userRoute)
app.use('/api/v1/trips', tripsRoute)
app.use('/api/v1', (req, res) => {
  return res.json({ message: 'Welcome to the API!' });
});

export default app