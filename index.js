
import express from "express";
import dotenv from "dotenv"
dotenv.config({
    path:".env"
})
import databaseConnection from './utils/database.js'
import cors from 'cors'
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";

const app = express();
//middlewares 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.get("/", (req, res) => {
    return res.status(200).json({
        message:"API is running successfully",
        success:true,
    });
})
app.use("/api/v1/user", userRoute);

const url = "http://localhost:8045";
app.listen(process.env.PORT,() => {
    databaseConnection()
    console.log(`Server listen at port ${url}`);
});
