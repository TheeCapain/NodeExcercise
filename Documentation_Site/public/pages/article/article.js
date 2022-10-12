function getArticle(){
fetch("/article").
then(resolve=>resolve.json())
.then(res=>{
    let articles = res.articles
    console.log(articles.headline)
})
}


getArticle()

app.get("/article/:headline", (req, res) => {
    res.send(battlePage.replace("%%TAB_TITLE%%", `Article ${req.params.headline}`));
    const pathVariables = location.pathname.split("/");
    const articleTitle = pathVariables.pop();

console.log(articleTitle);
});

