import pool from "../../db/db.js";

export const getAllStylists = async (req, res) => {
  try {
    const { search } = req.query;
    if (search) {
      const result = await pool.query(
        "SELECT * FROM stylists WHERE name ILIKE $1 OR bio ILIKE $1",
        [`%${search}%`],
      );
      return res.status(200).json(result.rows);
    }
    const result = await pool.query("SELECT * FROM stylists");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStylistById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM stylists WHERE id = $1", [
      id,
    ]);
    if (result.rows.length === 0)
      return res.status(404).json({ message: "Stylist not found" });
    return res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createStylist = async (req, res) => {
  try {
    const { name, bio, profile_pic } = req.body;
    const result = await pool.query(
      "INSERT INTO stylists (name, bio, profile_pic) VALUES ($1,$2,$3) RETURNING *",
      [name, bio, profile_pic],
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStylist = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, bio, profile_pic } = req.body;
    const result = await pool.query(
      "UPDATE stylists SET name = $1, bio = $2, profile_pic = $3 WHERE id = $4 RETURNING *",
      [name, bio, profile_pic, id],
    );
    if (result.rows.length === 0)
      return res.status(404).json({ message: "Stylist not found" });
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteStylist = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "DELETE FROM stylists WHERE id = $1 RETURNING *",
      [id],
    );
    if (result.rows.length === 0)
      return res.status(404).json({ message: "Stylist not found" });
    res.status(200).json({ message: "Stylist deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
