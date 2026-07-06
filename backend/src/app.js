import express from "express";
import cors from "cors";
import pool from "../db/db.js";
import appointmentRouter from "./routes/appointmentRoutes.js";
import galleryRouter from "./routes/galleryRoutes.js";
import stylistRouter from "./routes/stylistRoutes.js";
import authRouter from "./routes/authRoutes.js";
import { handleServerError } from "./utils/handleServerError.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Special Hair Salon API is running!" });
});

app.use("/api/appointments", appointmentRouter);
app.use("/api/gallery", galleryRouter);
app.use("/api/stylists", stylistRouter);
app.use("/api/auth", authRouter);

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("result:", result);
    res.json({ time: result.rows[0].now });
  } catch (error) {
    handleServerError(res, error, "test-db");
  }
});
export default app;
