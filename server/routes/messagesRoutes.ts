import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("HI!");
});

router.post("/", (req, res) => {
  res.send("Await minute!");
});

export default router;
