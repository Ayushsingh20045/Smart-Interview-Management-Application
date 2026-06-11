const express = require("express");
const router = express.Router();

const { uploadResume } = require("../controller/resumeController");

const upload = require("../middleware/upload");

router.post("/upload", upload.single("resume"), uploadResume);

module.exports = router;
