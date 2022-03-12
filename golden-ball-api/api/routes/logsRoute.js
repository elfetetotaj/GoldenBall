import express from "express";
import logsController from "../controllers/logsController";

const logsRouter = express.Router();

logsRouter.post("/create", logsController.post);
logsRouter.get("/fetch", logsController.get);

export default logsRouter;