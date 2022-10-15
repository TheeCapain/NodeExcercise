import {Router} from "express"

const userRouter = Router();

userRouter.post("/login",(req,res) =>{
    const user = user.find(
        user => 
        user.userName === req.body.userName &&
        user.userPW === req.body.userPW
    );
    if(user){
    res.send({data:user.userId})
} else {
    res.send("Wrong login")

}})

users = [{
    userId:1,
    userName: "Test",
    userPW: "123"
}]