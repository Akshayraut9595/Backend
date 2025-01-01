import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// for accepting json data
app.use(express.json({ limit: "16kb" }));

// for accepting url data
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// for accepting files folder
app.use(express.static("public"));

// for doing operations on/with cookies of user
app.use(cookieParser());

// export default app;
export { app };
