import express from "express";
import {
  getAllStylists,
  getStylistById,
  createStylist,
  updateStylist,
  deleteStylist,
} from "../controllers/stylistController.js";

const router = express.Router();

router.get("/", getAllStylists);
router.get("/:id", getStylistById);
router.post("/", createStylist);
router.put("/:id", updateStylist);
router.delete("/:id", deleteStylist);

export default router;
