import express from "express";
import cors from "cors";
import pool from "../db/db.js";
import appointmentRouter from "./routes/appointmentRoutes.js";
import galleryRouter from "./routes/galleryRoutes.js";
import stylistRouter from "./routes/stylistRoutes.js";
import authRouter from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Special Hair Salon API is running!" });
});

app.use("/appointments", appointmentRouter);
app.use("/gallery", galleryRouter);
app.use("/stylists", stylistRouter);
app.use("/auth", authRouter);

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
