import { Router } from 'express'
import db from "../database/connection_sqlite.js"
import bcrypt from 'bcrypt'

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

    const user = await db.get("SELECT * FROM users WHERE user_mail=?", [req.body.email])
    const istrue = bcrypt.compare(req.body.password, user.user_pw)

    if (istrue) {
        console.log("session is set");
    } else {
        console.log("test")
        res.status(400).send({ message: "Wrong email or password" });
    }

});


userRouter.get("/api/users/logout", (req, res) => {
    delete req.session.isLoggedIn
})


export default userRouter