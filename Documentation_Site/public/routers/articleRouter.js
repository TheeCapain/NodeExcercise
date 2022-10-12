import {Router} from "express"

const router= Router();

let articles = [{
    id:1,
    headline:"Crud",
    content: "Some text here",
    images:''
},{
    id:2,
    headline:"CallBack functions",
    content: "Some text here",
    images:''
},{
    id:3,
    headline:"JSON packages",
    content: "Some text here",
    images:''
}]

router.get("/articles",(req,res)=>{
   res.send({articles: articles})
 })

 export default router
 

 