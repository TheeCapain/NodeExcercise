import { Router } from 'express'
import db from "../database/connection_sqlite.js"
import bcrypt from 'bcrypt'

const userRouter = Router()
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(myPlaintextPassword, salt);

//https://www.npmjs.com/package/bcrypt



userRouter.post("/signup", async (req, res) => {
    console.log(req.body.email)

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(pw, salt(function(err, hash){
            
        }))
    })

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