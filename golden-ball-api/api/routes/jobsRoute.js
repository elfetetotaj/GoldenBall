import express from "express";
import jobController from "../controllers/jobController";

const jobRouter = express.Router();

jobRouter.post("/create", jobController.post);
jobRouter.get("/get", jobController.get);

export default jobRouter;
