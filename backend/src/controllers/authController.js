import pool from "../../db/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { username, password, name } = req.body;

    const existing = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username],
    );
    if (existing.rows.length > 0)
      return res.status(400).json({ message: "Username already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users (username,password,name) VALUES ($1,$2,$3)",
      [username, hashedPassword, name],
    );
    res.status(201).json({ message: "Register successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    if (user.rows.length === 0)
      return res.status(401).json({ message: "Invalid username or password" });

    const isPasswordValid = await bcrypt.compare(
      password,
      user.rows[0].password,
    );
    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid username or password" });

    const token = jwt.sign(
      { userId: user.rows[0].id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );
    res.status(200).json({ message: "Login successfully", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMe = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "Unauthorized" });

    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const userId = decoded.userId;

    const result = await pool.query(
      "SELECT id, username, name, profile_pic, role FROM users WHERE id =$1",
      [userId],
    );
    if (result.rows.length === 0)
      return res.status(401).json({ message: "Unauthorized" });

    res.status(200).json({ user: result.rows[0] });
  } catch (error) {
    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError"
    )
      return res.status(401).json({ message: "Unauthorized" });
    res.status(500).json({ message: error.message });
  }
};
