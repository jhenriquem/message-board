import { Router } from "express";
import { getMessages, postMessage } from "../controllers/messagesControllers";
import checkData from "../middlewares/checkData";

const router = Router();

router.get("/", getMessages);

router.post("/", checkData, postMessage);

export default router;
