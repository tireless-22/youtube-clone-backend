import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from "./routes/users.js"
import videoRoutes from "./routes/videos.js"
import commentRoutes from "./routes/comments.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/video", videoRoutes);

app.use((err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || "something went wrong";
	return res.status(status).json({
		success: false,
		status: status,
		message:message
	})
})




const connectMongo=()=>{
	mongoose.connect(process.env.MONGO)
		.then(() => {
			console.log("connected to mongodb")

			
		})
		.catch(e => {
			console.log(e);
	})
}


app.listen(8870, () => {
	connectMongo();
	console.log("listening in 8870")
})















