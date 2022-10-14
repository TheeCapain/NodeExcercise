function getArticle() {
    fetch("/article").
        then(resolve => resolve.json())
        .then(res => {
            let articles = res.articles
            console.log(articles.headline)
        })
}