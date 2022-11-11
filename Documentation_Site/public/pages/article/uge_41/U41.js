//addeventlistener kan bruges til at få id til function
const articleBox = document.getElementById("article-box")

async function getArticles() {
    const response = await fetch(
        `/articles/7`
    );
    const articles = await response.json();

    console.log(articles)

    console.log(articles.data.articleTitle)

    const title = document.createElement("h1")
    title.id = articles.data.articleId
    
    const summary = document.createElement("p")
    summary.textContent = articles.data.articleSummary

    articleBox.appendChild(title)
    articleBox.appendChild(summary)
    title.textContent = articles.data.articleTitle

    articles.data.subArticles.forEach((article) => {

        const subtitle = document.createElement("h2")
        subtitle.id = article.subArticlesid
        subtitle.textContent = article.subTitle

        const text = document.createElement("p")
        text.textContent = article.text
        const img = document.createElement("img")
        img.src = article.img
        articleBox.appendChild(subtitle)
        articleBox.appendChild(text)
        articleBox.appendChild(img)
    });
}

getArticles()