import express from "express";
import playerController from "../controllers/playerController";
import checkIfAuthenticated from "../middlewares/checkIfAuthenticated";

const playerRoute = express.Router();
// playerRoute.use(checkIfAuthenticated);

playerRoute.get("/list". playerController.list);
playerRoute.get(":id", playerController.get);
playerRoute.post("/create", playerController.post);
playerRoute.put("/update", playerController.put);
playerRoute.put("/:id/uploadFile", playerController.uploadFile);
playerRoute.put(
    "/:playerId/removeFile/:filename",
    playerController.deleteFile
  );

export default playerRoute;