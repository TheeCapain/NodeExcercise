import {Router} from 'express'
import db from "../database/connection_sqlite.js"

const userRouter = Router()


userRouter.post("/signup", async (req, res)=>{
console.log("Vi er i router")
        const user = user.find(
            user => 
            user.email === req.body.email &&
            user.pswd === req.body.pswd
        );

if(user){
    console.log("Bruger logget ind")
    result = await db.run((`INSERT INTO users (user_mail, user_pswd) VALUES (?, ?)`, [latinName, commonName]));
    res.send({data:user.userId})

} else{
    res.send("Wrong login")
}


})

export default userRouter