import express from "express";
const app = express();

// import path from "path";
// app.use(express.static(path.resolve("../client/dist")));

app.use(express.json());

import cors from "cors";
app.use(cors());

import userRouter from "./routers/userRouter.js";
app.use(userRouter);


const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log("Server is running on port", PORT));