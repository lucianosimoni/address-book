import express from "express";
import { userLogin, userSignup } from "../controllers/firebase.js";
const router = express.Router();

router.post("/login", async (req, res) => {
  await userLogin(req, res);
});
router.post("/signup", async (req, res) => {
  await userSignup(req, res);
});

export default router;
