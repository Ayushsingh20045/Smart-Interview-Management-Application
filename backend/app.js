const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://smart-interview-management-applicat.vercel.app",
  "https://smart-interview-management-application-mh9c6az0a.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);



app.set("trust proxy", 1);

app.use(express.json());

app.use(cookieParser());





app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/jobs", require("./routes/jobRoutes"));
app.use("/api/stats", require("./routes/statsRoutes"));
app.use("/api/ai", require("./routes/aiRoutes"));
app.use("/api/resume", require("./routes/resumeRoutes"));

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
