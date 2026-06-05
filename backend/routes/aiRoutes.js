const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {getQuestions}=require("../controller/aiController")

router.post("/questions", protect, getQuestions);

module.exports = router;
