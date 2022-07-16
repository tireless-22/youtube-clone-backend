import express from "express";
const router = express.Router();
import { } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js" 
import {addVideo,updateVideo,deleteVideo,getVideo, addView,random,trend,sub} from "../controllers/video.js"

router.post("/", verifyToken, addVideo);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, deleteVideo);
router.get("/find/:id", getVideo);
router.put("/views/:id",addView)
router.get("/trend", random)
router.get("/random",trend)
router.get("/sub",verifyToken,sub)

export default router;
