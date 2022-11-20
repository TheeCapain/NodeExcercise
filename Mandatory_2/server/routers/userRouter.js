import { Router } from 'express'
import db from "../connection_sqlite.js"

const userRouter = Router()

userRouter.post("/signup", async (req, res) => {
    console.log("Vi er i router")
    const user = user.find(
        user =>
            user.email === req.body.email &&
            user.pswd === req.body.pswd
    );

    if (user) {
        console.log("Bruger logget ind")
        result = await db.run((`INSERT INTO users (user_mail, user_pswd) VALUES (?, ?)`, [latinName, commonName]));
        res.send({ data: user.userId })

    } else {
        res.send("Wrong login")
    }
})

userRouter.post("/login", async (req, res, next) => {

    const user = await db.get("SELECT * FROM users WHERE user_mail=? AND user_pw=?", [req.body.mail, req.body.pswd])
    console.log(user)
    if (user) {
        console.log("log ind")
        next();
    } else {
        console.log("wtf")
    }
})


export default userRouter