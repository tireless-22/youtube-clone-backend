import express from "express";
const router = express.Router();
import { update,deleteuser,getUser,subscribe,unsubscribe,like,dislike } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

// update user

router.put("/:id", verifyToken, update);

// delete user

router.delete("/:id",verifyToken, deleteuser);

// // get a user

router.get("/find/:id",getUser)

// // subscribe a user
router.put("/sub/:id",verifyToken,subscribe)

// // unsubscribe a user

router.put("/unsub/:id",verifyToken, unsubscribe);

// // like a video
router.put("/like/:videoId",verifyToken,like)

// // dislike a video
router.put("/like/:videoId",verifyToken, dislike);

export default router;
