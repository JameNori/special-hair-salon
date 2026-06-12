import pool from "../../db/db.js";
import jwt from "jsonwebtoken";

export const protectAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "Unauthorized" });

    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const userId = decoded.userId;

    const result = await pool.query("SELECT role FROM users WHERE id = $1", [
      userId,
    ]);
    if (result.rows.length === 0)
      return res.status(401).json({ message: "Unauthorized" });
    if (result.rows[0].role !== "admin")
      return res.status(403).json({ message: "Forbidden" });
    next();
  } catch (error) {
    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError"
    )
      return res.status(401).json({ message: "Unauthorized" });
    res.status(500).json({ message: error.message });
  }
};
