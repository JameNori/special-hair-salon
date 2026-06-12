import express from "express";
import {
  getAllGallery,
  getGalleryById,
  createGallery,
  updateGallery,
  deleteGallery,
} from "../controllers/galleryController.js";
import { protectAdmin } from "../middlewares/protectAdmin.js";

const router = express.Router();

router.get("/", getAllGallery);
router.get("/:id", getGalleryById);
router.post("/", protectAdmin, createGallery);
router.put("/:id", protectAdmin, updateGallery);
router.delete("/:id", protectAdmin, deleteGallery);

export default router;
