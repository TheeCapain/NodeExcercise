import {Router} from "express"

const userRouter = Router();

userRouter.post("/login",(req,res) =>{
    const user = users.find(
        user => 
        user.userName === req.body.name &&
        user.userPW === req.body.password
    );
  
    if(user){
    console.log("Bruger logget ind")
    res.send({data:user.userId})
} else {
    res.send("Wrong login")

}})

const users = [{
    userId:1,
    userName: "test",
    userPW: "123"
}]

export default userRouter