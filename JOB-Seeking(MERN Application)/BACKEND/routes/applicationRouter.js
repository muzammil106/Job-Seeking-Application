import express from "express";
import { isAuthorized } from "../middlewares/auth.js";
import {
    employerGetAllApplications,
    jobseekerDeleteApplication,
    jobseekerGetAllApplications,
    postApplication,
  } from "../controllers/applicationController.js";

const router = express.Router();

router.post("/post", isAuthorized, postApplication);

router.get("/employer/getall", isAuthorized, employerGetAllApplications);

router.get("/jobseeker/getall", isAuthorized, jobseekerGetAllApplications);

router.delete("/delete/:id", isAuthorized, jobseekerDeleteApplication);

export default router;