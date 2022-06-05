import express from "express";
import {
  isAccountSignedIn,
  SignIn,
  getAccount,
  createAccount,
  updateAccount,
} from "../controllers/Account.js";
import { verifyToken } from "../middleware/Auth.js";

const router = express.Router();
//http://localhost:5000/Accounts

router.get("/Auth", verifyToken, isAccountSignedIn);
router.post("/Auth", SignIn);
router.get("/", getAccount);
router.post("/", createAccount);
router.patch("/:id", updateAccount);

export default router;
