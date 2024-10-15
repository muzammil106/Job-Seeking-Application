import express from "express";
import dotenv from 'dotenv';
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import userRouter from "./routes/userRouter.js";
import applicationRouter from "./routes/applicationRouter.js";
import jobRouter from "./routes/jobRouter.js";
import {dbConnection} from "./database/dbConnections.js"
import {errorMiddleware} from "./middlewares/error.js"

const app = express();
dotenv.config({path: "./config/config.env"});

//for middleware use 
app.use(cors({
    origin: [process.env.FRONTED_URL],
    methods:['GET','POST','DELETE','PUT'],
    credentials:true,
}));

app.use(cookieParser());

//use for jsondata into parse
app.use(express.json());
//when we provided string it convert into json
app.use(express.urlencoded({extended:true}));
//express fileUpload
app.use(fileUpload({
    useTempFiles:true,
    temFileDir:"/tmp/"
})
);

app.use('/api/v1/user',userRouter);
app.use('/api/v1/application',applicationRouter);
app.use('/api/v1/job',jobRouter);

dbConnection();

//Error middleware also used at the end 
app.use(errorMiddleware);
export default app;