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

router.get("/articles", (req,res)=>{
    console.log(articles[0].content)
    res.redirect(`articles/${articles[0]}`);
})

router.get(`/articles/:headline`,(req,res)=>{
    const foundArticle = articles.find(articles => articles.headline === req.params.headline)
    console.log(foundArticle)
   res.send({data: foundArticle})
 })

 export default router
 

 