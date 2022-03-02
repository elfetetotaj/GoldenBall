import express from "express";
import mongoose from "mongoose";
import checkIfAuthenticated from "./api/middlewares/checkIfAuthenticated";
import getAuthToken from "./api/middlewares/getAuthToken";
import usersRouter from "./api/routes/usersRoute";
import cors from "cors";
import helmet from "helmet";
import playerRouter from "./api/routes/playerRoute";


mongoose.connect("mongodb://localhost:27017/goldenBall").then(() => {
  console.log("Connected to mongodb port 27017");

const port = process.env.PORT || 4000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use("/static", express.static(`${__dirname}/public/files`));

app.use(helmet());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(getAuthToken);

// app.use(checkIfAuthenticated);

app.use("/users", usersRouter);
app.use("player", playerRouter);

app.listen(port, () => {
  console.log(`Golden ball api running on port ${port}`);
});
});