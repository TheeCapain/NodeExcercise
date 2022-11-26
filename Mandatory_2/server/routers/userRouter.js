import { Router } from 'express'
import db from "../database/connection_sqlite.js"
import bcrypt, { hash } from 'bcrypt'
import { nextTick } from 'process';

const userRouter = Router()
const saltRounds = 10;

const salt = bcrypt.genSaltSync(saltRounds);

function hashPW(pw) {
    const hashedPW = bcrypt.hashSync(pw, salt);
    return hashedPW
}

userRouter.post("/api/users/signup", async (req, res) => {
    console.log(req.body.email)

    const hashedPw = hashPW(req.body.pswd)

    console.log(hashedPw)
    await db.run(`INSERT INTO users (user_mail, user_pw) VALUES (?, ?)`, [req.body.email, hashedPw])
})

userRouter.get("/api/users", async (req, res) => {
    const data = await db.all("SELECT * FROM users;");
    res.send({ data });
})


//https://www.section.io/engineering-education/session-management-in-nodejs-using-expressjs-and-express-session/ sessions in backend

userRouter.post("/api/users/login", async (req, res, next) => {

    console.log(req.body.password)
    console.log(req.body.email)

    const hashedPw = hashPW(req.body.password)

    const user = await db.get("SELECT * FROM users WHERE user_mail=?", [req.body.email])
    console.log(user)
    console.log(user.user_pw)
    console.log(hashedPw)
    if (user) {
        console.log("session is set");
        next(user);

    } else {
        console.log("test")
        res.status(400).send({ message: "Wrong email or password" });
    }

});


userRouter.get("/api/users/logout", (req, res) => {
    delete req.session.isLoggedIn
})


export default userRouter