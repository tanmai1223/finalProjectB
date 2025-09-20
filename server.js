import express from "express";
import db from "./config/db.js";
import routes from "./routes/logpost.js";
import cors from "cors"

const app=express()
db();
app.use(cors({
  origin: "http://localhost:5173", // React app URL
  credentials: true,               // only if you're using cookies
}));
app.use(express.json());
app.use('/api/logs',routes)
app.use('/',(req,res)=>{
    res.send("Hello world by tanmai")
})

app.listen(5000,()=>{
    console.log(`Your app is running on http://localhost:5000`)
})