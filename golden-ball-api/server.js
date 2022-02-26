import express from "express";
import checkIfAuthenticated from "./api/middlewares/checkIfAuthenticated";
import getAuthToken from "./api/middlewares/getAuthToken";
import usersRouter from "./api/routes/usersRoute";
import cors from "cors";
import helmet from "helmet";

const port = process.env.PORT || 4000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(helmet());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(getAuthToken);

// app.use(checkIfAuthenticated);

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Golden ball api running on port ${port}`);
});
