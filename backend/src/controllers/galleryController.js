import pool from "../../db/db.js";
import { handleServerError } from "../utils/handleServerError.js";

export const getAllGallery = async (req, res) => {
  try {
    const { search } = req.query;

    if (search) {
      const result = await pool.query(
        "SELECT * FROM gallery WHERE image_url ILIKE $1 OR description ILIKE $1",
        [`%${search}%`],
      );
      return res.status(200).json(result.rows);
    }
    const result = await pool.query("SELECT * FROM gallery");
    res.status(200).json(result.rows);
  } catch (error) {
    handleServerError(res, error, "getAllGallery");
  }
};

export const getGalleryById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM gallery WHERE id = $1", [
      id,
    ]);
    if (result.rows.length === 0)
      return res.status(404).json({ message: "Gallery not found" });
    res.status(200).json(result.rows[0]);
  } catch (error) {
    handleServerError(res, error, "getGalleryById");
  }
};

export const createGallery = async (req, res) => {
  try {
    const { stylist_id, image_url, description } = req.body;
    const result = await pool.query(
      "INSERT INTO gallery (stylist_id,image_url,description) VALUES ($1,$2,$3) RETURNING *",
      [stylist_id, image_url, description],
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    handleServerError(res, error, "createGallery");
  }
};

export const updateGallery = async (req, res) => {
  try {
    const { id } = req.params;
    const { stylist_id, image_url, description } = req.body;
    const result = await pool.query(
      "UPDATE gallery SET stylist_id = $1, image_url = $2, description = $3 WHERE id = $4 RETURNING *",
      [stylist_id, image_url, description, id],
    );
    if (result.rows.length === 0)
      return res.status(404).json({ message: "Gallery not found" });
    res.status(200).json(result.rows[0]);
  } catch (error) {
    handleServerError(res, error, "updateGallery");
  }
};

export const deleteGallery = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "DELETE FROM gallery WHERE id = $1 RETURNING *",
      [id],
    );
    if (result.rows.length === 0)
      return res.status(404).json({ message: "Gallery not found" });
    res.status(200).json({ message: "Gallery deleted successfully" });
  } catch (error) {
    handleServerError(res, error, "deleteGallery");
  }
};
