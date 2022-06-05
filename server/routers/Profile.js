import express from "express";
import {
  getProfile,
  createProfile,
  updateProfile,
} from "../controllers/Profile.js";

const router = express.Router();
//http://localhost:5000/Profile

router.get("/", getProfile);
router.post("/", createProfile);
router.patch("/:id", updateProfile);

export default router;
