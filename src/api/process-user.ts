import express from "express";
import { processUser } from "../application/process-user";

const processUserRouter = express.Router();

processUserRouter.route("/").post(processUser);

export default processUserRouter;
