import { response } from "express";

function getArticle(){
fetch("/article").
then(resolve=>resolve.json())
.then(res=>{
    let articles = res.articles
    console.log(articles.headline)
})
}


fetch(`http://localhost:8080/articles/${articleTitle}`)
.then(response =>response.json())
.then(article =>{
    console.log(article)

    
})

/*
app.get(`/article/${articleTitle}`, (req, res) => {
    const article = req.params.headline
    const articleWithData = injectData(articlePage, {article})
    console.log(article)
    res.send(articleWithData.replace("%%TAB_TITLE%%", `Article ${req.params.article}`))
});
*/