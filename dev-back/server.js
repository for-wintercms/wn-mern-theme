import express from "express";
import dotenv from "dotenv";
import userRoutes from "./src/routes/src/userRoutes.js";
import { notFound, errorHandler } from "./src/middlewares/errorMiddleware.js";
import connectDB from "./src/config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

const allowedOrigins = ["http://localhost:5173"];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(
    `Server started on port ${port} with ${process.env.NODE_ENV} environment`
  );
});
