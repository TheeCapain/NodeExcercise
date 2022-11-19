import {Router} from 'express'

const userRouter = Router()


userRouter.post("/signup",(req, res)=>{

        const user = user.find(
            user => 
            user.email === req.body.email &&
            user.pswd === req.body.pswd
        );

if(user){
    console.log("Bruger logget ind")
    res.send({data:user.userId})
} else{
    res.send("Wrong login")
}


})

export default userRouter