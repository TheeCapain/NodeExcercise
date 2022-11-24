import { Router } from 'express'
import db from "../database/connection_sqlite.js"
import bcrypt, { hash } from 'bcrypt'

const userRouter = Router()
const saltRounds = 10;

const salt = bcrypt.genSaltSync(saltRounds);

function hashPW(pw){
    const hashedPW = bcrypt.hashSync(pw, salt);
    return hashedPW
}

userRouter.post("/signup", async (req, res) => {
    console.log(req.body.email)

    const hashedPw = hashPW(req.body.pswd)

    console.log(hashedPw)
    await db.run(`INSERT INTO users (user_mail, user_pw) VALUES (?, ?)`, [req.body.email, hashedPw])
})

userRouter.get("/api/users", async (req, res) => {
    const data = await db.all("SELECT * FROM users;");
    res.send({ data });
})

userRouter.post("/login", async (req, res, next) => {
    const hashedPw = hashPW(req.body.pswd)

    const user = await db.get("SELECT * FROM users WHERE user_mail=? AND user_pw=?", [req.body.email, hashedPw])
    console.log(user.pw)
    console.log(hashedPw)

    console.log("user logged in")
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