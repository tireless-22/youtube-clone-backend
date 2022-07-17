import express from "express";
import { addComment,deleteComment,getComments } from "../controllers/comment.js";
const router = express.Router();

import { verifyToken } from "../verifyToken.js";


router.post("/", verifyToken,addComment);
router.delete("/:id", verifyToken, deleteComment);
router.get("/:videoId", verifyToken, getComments);


export default router;
