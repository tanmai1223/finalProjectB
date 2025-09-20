import { Router } from "express";
import { getAnalysis, getLogs, getLogsTime, postLogs } from "../controllers/logControllers.js";

const routes = Router();

routes.post("/", postLogs);

routes.get("/", getLogs);

routes.get('/time',getLogsTime);

routes.get('/analysis',getAnalysis);

export default routes;
