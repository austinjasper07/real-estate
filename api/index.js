import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from "./routes/UserRoute.js";
import signUp from './routes/Sign-up.js';
import errorHandler from './middlewares/ErrorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your client's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

// Route Handlers
app.use('/user', userRouter);
app.use('/sign-up', signUp);


// Error handler middleware
app.use(errorHandler);


// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/real-estate")
  .then(() => { console.log("Database Connected successfully"); })
  .catch((err) => console.log(err));

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
