import express from 'express';
import mongoose from 'mongoose';
import userRouter from "./routes/UserRoute.js";
import signUp from './routes/Sign-up.js';
import errorHandler from './middlewares/ErrorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Route Handlers
app.use('/user', userRouter);
app.use('/sign-up', signUp);


// Error handler middleware
app.use(errorHandler);

// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || "Internal Server Error"

//   return res.status(statusCode).json({
//       Success: false,
//       statusCode,
//       message
//   });
// })



// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/real-estate")
  .then(() => { console.log("Database Connected successfully"); })
  .catch((err) => console.log(err));

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
