function getArticle() {
    fetch("/article").
        then(resolve => resolve.json())
        .then(res => {
            let articles = res.articles
            console.log(articles.headline)
        })
}

//addeventlistener
const articleBox = document.getElementById("article-box")

async function getArticles(articleid) {
    const response = await fetch(
        `/articles/${articleid}`
    );
    const articles = await response.json();
    console.log(articles.data.articleTitle)

    const title = document.createElement("h1")
    title.id = articles.data.articleId
    articleBox.appendChild(title)
    title.textContent = articles.data.articleTitle

    articles.data.subArticles.forEach((article) => {

        const subtitle = document.createElement("h2")
        subtitle.id = article.subArticlesid
        subtitle.textContent = article.subTitle

        const text = document.createElement("p")
        text.textContent = article.text
        articleBox.appendChild(subtitle)
        articleBox.appendChild(text)
    });
}


function fillContent(content){

    
}
getArticles(1)