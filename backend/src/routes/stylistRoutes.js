import express from "express";
import {
  getAllStylists,
  getStylistById,
  createStylist,
  updateStylist,
  deleteStylist,
} from "../controllers/stylistController.js";
import { protectAdmin } from "../middlewares/protectAdmin.js";

const router = express.Router();

router.get("/", getAllStylists);
router.get("/:id", getStylistById);
router.post("/", protectAdmin, createStylist);
router.put("/:id", protectAdmin, updateStylist);
router.delete("/:id", protectAdmin, deleteStylist);

export default router;
