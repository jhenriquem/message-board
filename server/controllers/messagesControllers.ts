import { Request, Response } from "express";
import pool from "../database/connection";
import { insertNewMessage, queryAllMessages } from "../database/queries";
import messageType from "../types/messageType";

export async function getMessages(req: Request, res: Response) {
  try {
    const result = await pool.query(queryAllMessages);
    return res
      .status(200)
      .json({ statusMessage: "Success", data: result.rows });
  } catch (err: any) {
    console.log(`Erro no controlador => ${err.message}`);
    return res.status(500).json({ statusMessage: "Error", error: err.message });
  }
}

export async function postMessage(req: Request, res: Response) {
  try {
    const data: messageType = req.body;
    const dataArray = [data.id, data.username, data.message, data.date];
    await pool.query(insertNewMessage, dataArray);
    return res.status(200).json({ statusMessage: "Success" });
  } catch (err: any) {
    console.log(`Erro no controlador => ${err.message}`);
    return res.status(500).json({ statusMessage: "Error", error: err.message });
  }
}
