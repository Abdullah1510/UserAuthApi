import express from "express";
import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});
import databaseConnection from "./utils/database.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import { swaggerUi, specs } from "./swagger.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(cors());
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "API is running successfully",
    success: true,
  });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))
app.use("/api/user", userRoute);


const url = "http://localhost:8045";
app.listen(process.env.PORT, async () => {
  await databaseConnection();
  console.log(`Server listen at port ${url}`);
});
