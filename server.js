import express from "express";
import db from "./config/db.js";
import routes from "./routes/logpost.js";
import routers from "./routes/control.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();
db();
app.use(
  cors({
    origin: "https://apimanaging.netlify.app", // React app URL
    credentials: true, // only if you're using cookies
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json());
app.use("/api/logs", routes);
app.use("/api/logs/control", routers);
app.use("/", (req, res) => {
  res.send("Hello world by tanmai");
});

app.listen(process.env.PORT, () => {
  console.log(`Your app is running on http://localhost:${process.env.PORT}`);
});
