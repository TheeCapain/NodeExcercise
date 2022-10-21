import {Router} from "express"

const userRouter = Router();

userRouter.get("/user/:id", (req, res) => {
    const user = users.find((user) => user.userId === Number(req.params.id));
    res.send({ data: user });
  });


userRouter.post("/login",(req,res) =>{
    console.log("Vi er herinde")
    console.log(req.data)
    const user = users.find(
        user => 
        user.userName === req.body.name &&
        user.userPW === req.body.password
    );
  
    if(user){
    console.log(user.userId)
    console.log("virker det?")
    res.send({data:user.userId})
} else {
    res.send("Wrong login")

}})

const users = [{
    userId:1,
    userName: "Test",
    userPW: "123"
}]

export default userRouter