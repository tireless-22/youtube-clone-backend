import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"


const app = express();
dotenv.config();




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















