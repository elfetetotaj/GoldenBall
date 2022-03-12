import express from "express";
import contactController from "../controllers/contactController";

const contactRouter = express.Router();

contactRouter.post("/create", contactController.post);
contactRouter.get("/get", contactController.get);

export default contactRouter;
