import express from "express";
import { getUser, login, logout, register } from "../controllers/userController.js";
import { isAuthorized } from "../middlewares/auth.js";


const router = express.Router();

router.post("/register",register);

router.post("/login",login);

router.get("/logout",isAuthorized,logout);

router.get("/getuser", isAuthorized, getUser);




export default router;