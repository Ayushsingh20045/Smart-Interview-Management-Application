const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.set("trust proxy", 1);

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin:"http://localhost:5173",
    credentials: true,
  }),
);




app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/jobs", require("./routes/jobRoutes"));
app.use("/api/stats", require("./routes/statsRoutes"));
app.use("/api/ai", require("./routes/aiRoutes"));

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
