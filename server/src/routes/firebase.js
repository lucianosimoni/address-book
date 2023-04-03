import express from "express";
import { userLogin, userSignup } from "../controllers/firebase.js";
const router = express.Router();

router.post("/login", async (req, res) => userLogin(req, res));
router.post("/signup", async (req, res) => userSignup(req, res));

export default router;
