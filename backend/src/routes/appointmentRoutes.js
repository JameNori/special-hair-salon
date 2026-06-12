import express from "express";
import {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} from "../controllers/appointmentController.js";
import { protectAdmin } from "../middlewares/protectAdmin.js";

const router = express.Router();

router.get("/", getAllAppointments);
router.get("/:id", getAppointmentById);
router.post("/", protectAdmin, createAppointment);
router.put("/:id", protectAdmin, updateAppointment);
router.delete("/:id", protectAdmin, deleteAppointment);

export default router;
