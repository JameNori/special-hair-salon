import express from "express";
import cors from "cors";
import pool from "../db/db.js";
import appointmentRouter from "./routes/appointmentRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Special Hair Salon API is running!" });
});

app.use("/appointments", appointmentRouter);

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("result:", result);
    res.json({ time: result.rows[0].now });
  } catch (error) {
    console.error("Database error:", error.message);
    res.status(500).json({ errror: error.message });
  }
});
export default app;
