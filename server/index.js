import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoute from "./routes/auth.js";

const app = express();
dotenv.config();

//Middlewere
app.use(cors());
app.use(express.json());

//Routes

app.use("/auth", AuthRoute);

async function start() {
	try {
		await mongoose
			.connect(process.env.MONGO_URI)
			.then(() => console.log("MongoDB OK"))
			.catch((err) => console.log("MongoDB error", err.message));

		app.listen(4000, () => {
			console.log("server started http://localhost:4000");
		});
	} catch (err) {
		console.log(err);
	}
}

start();
