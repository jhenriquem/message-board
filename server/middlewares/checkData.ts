import { NextFunction, Request, Response } from "express";
import messageType from "../types/messageType";

// Middleware responsible for checking whether the data needed to add a new message is being passed
export default function checkData(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data: messageType = req.body;
    const checkExist =
      data.id && data.username && data.message && data.date ? true : false;
    const isValid = Object.values(data).every((value) => value !== "");

    if (!checkExist || !isValid)
      return res.status(400).json({
        statusMessage: "Incomplete or invalid data",
      });
    next();
  } catch (err: any) {
    console.log(`Erro no middleware => ${err.message}`);
    return res.status(500).json({ statusMessage: "Error", error: err.message });
  }
}
