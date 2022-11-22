import { Router } from 'express'
import db from "../database/connection_sqlite.js"

const userRouter = Router()

userRouter.post("/signup", async (req, res) => {
    console.log(req.body.email)

    await db.run(`INSERT INTO users (user_mail, user_pw) VALUES (?, ?)`, [req.body.email, req.body.pswd])


})

userRouter.get("/api/users", async (req, res) => {
    const data = await db.all("SELECT * FROM users;");
    res.send({ data });
})

userRouter.post("/login", async (req, res, next) => {
    const user = await db.get("SELECT * FROM users WHERE user_mail=? AND user_pw=?", [req.body.email, req.body.pswd])

    if (user) {
        res.status(200).send({ message: `You are already logged in as ${req.body.email}` });
    } else {
        if (user) {
            next();
        } else {
            res.status(400).send({ message: "Wrong email or password" });
        }
    }
})


export default userRouter