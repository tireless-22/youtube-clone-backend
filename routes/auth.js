import express from "express";
const router = express.Router();
import { signup,signin } from "../controllers/auth.js";

// CREATE A USER
router.post("/signup", signup);




// SIGN IN
router.post("/signin",signin);





// GOOGLE AUTH
router.post("/google");








export default router;
