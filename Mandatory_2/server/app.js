import express from "express";
const app = express();

app.use(express.json());

import cors from "cors";
app.use(cors());

import userRouter from "./routers/userRouter.js";
app.use(userRouter);

import mailRouter from "./routers/mailRouter.js"
app.use(mailRouter)


const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log("Server is running on port", PORT));