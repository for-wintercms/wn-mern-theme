import express from "express";
import {
  authUser,
  logoutUser,
  registerUser,
} from "../controller/userController.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);

export default router;
