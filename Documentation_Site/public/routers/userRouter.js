import {Router} from "express"

export const userRouter = Router();

userRouter.get("/login/:id", (req, res) => {
    const user = users.find((user) => user.userId === Number(req.params.id));
    res.send({ data: user });
  });


userRouter.post("/login",(req,res) =>{
    console.log("Vi er herinde")
    const user = user.find(
        user => 
        user.userEmail === req.body.name &&
        user.userPassword === req.body.password
    );
    if(user){
    res.send({data:user.userId})
} else {
    res.send("Wrong login")

}})

const users = [{
    userId:1,
    userName: "Test",
    userPW: "123"
}]