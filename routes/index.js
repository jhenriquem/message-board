import express from "express";
const router = express.Router();

const messagesArray = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { messages: messagesArray });
});

router.post("/", (req, res, next) => {
  messagesArray.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.render("index", { messages: messagesArray });
});

export default router;
