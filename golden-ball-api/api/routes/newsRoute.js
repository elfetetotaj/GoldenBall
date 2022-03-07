import express from "express";
import newsController from "../controllers/newsController";
import checkIfAuthenticated from "../middlewares/checkIfAuthenticated";

const newsRoute = express.Router();
// newsRoute.use(checkIfAuthenticated);

newsRoute.get("/list", newsController.list);
newsRoute.get(":id", newsController.get);
newsRoute.post("/create", newsController.post);
newsRoute.put("/update", newsController.put);
newsRoute.put("/:id/uploadFile", newsController.uploadFile);
newsRoute.put(
    "/:newsId/removeFile/:filename",
    newsController.deleteFile
  );

export default newsRoute;