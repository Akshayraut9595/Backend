import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

// import express from "express"
// const app = express();
// import { DB_NAME } from "./constants";
// import mongoose from "mongoose";

// async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error: ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("Error: ", error);
//     throw error;
//   }
// };

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongoDB connections failed !! ", err);
  });
