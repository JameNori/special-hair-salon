import pool from "../../db/db.js";
import { handleServerError } from "../utils/handleServerError.js";

export const getAllAppointments = async (req, res) => {
  try {
    const { search } = req.query;

    if (search) {
      const result = await pool.query(
        "SELECT * FROM appointments WHERE customer_name ILIKE $1 OR phone ILIKE $1 OR service ILIKE $1 OR status ILIKE $1 OR note ILIKE $1",
        [`%${search}%`],
      );
      return res.status(200).json(result.rows);
    }
    const result = await pool.query("SELECT * FROM appointments");
    res.status(200).json(result.rows);
  } catch (error) {
    handleServerError(res, error, "getAllAppointments");
  }
};

export const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "SELECT * FROM appointments WHERE id = $1",
      [id],
    );
    if (result.rows.length === 0)
      return res.status(404).json({ message: "Appointment not found" });
    res.status(200).json(result.rows[0]);
  } catch (error) {
    handleServerError(res, error, "getAppointmentById");
  }
};

export const createAppointment = async (req, res) => {
  try {
    const {
      stylist_id,
      customer_name,
      phone,
      service,
      date,
      time,
      status,
      note,
    } = req.body;
    const result = await pool.query(
      "INSERT INTO appointments (stylist_id, customer_name,phone,service,date,time,status,note) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
      [stylist_id, customer_name, phone, service, date, time, status, note],
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    handleServerError(res, error, "createAppointment");
  }
};

export const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      stylist_id,
      customer_name,
      phone,
      service,
      date,
      time,
      status,
      note,
    } = req.body;
    const result = await pool.query(
      "UPDATE appointments SET stylist_id = $1, customer_name = $2, phone = $3, service = $4, date = $5, time = $6, status = $7, note = $8 WHERE id = $9 RETURNING *",
      [stylist_id, customer_name, phone, service, date, time, status, note, id],
    );
    if (result.rows.length === 0)
      return res.status(404).json({ message: "Appointment not found" });
    res.status(200).json(result.rows[0]);
  } catch (error) {
    handleServerError(res, error, "updateAppointment");
  }
};

export const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "DELETE FROM appointments WHERE id = $1 RETURNING *",
      [id],
    );
    if (result.rows.length === 0)
      return res.status(404).json({ message: "Appointment not found" });
    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    handleServerError(res, error, "deleteAppointment");
  }
};
