<<<<<<< HEAD
import { response } from "express";

fetch(`/api/:headline`)
.then(response => response.json())
.then(article =>{
    console.log(article)
})
=======
//addeventlistener kan bruges til at få id til function
const articleBox = document.getElementById("content-table")


async function getArticles() {
    const response = await fetch(
        `/articles`
    );
    const articles = await response.json();

    console.log(articles.data.articleTitle)

    const title = document.createElement("h1")
    title.id = articles.data.articleId
    title.textContent = articles.data.articleTitle
    
    articleBox.appendChild(title)
    
   

    articles.data.forEach((article) => {
        console.log(article.articleTitle)
        let aTag = document.createElement("a")
        const subtitle = document.createElement("h2")
        subtitle.id = article.articleId
        subtitle.textContent = article.articleTitle

        const text = document.createElement("p")
        text.textContent = article.articleSummary
        articleBox.appendChild(subtitle)
        articleBox.appendChild(text)
    });
}

getArticles()
>>>>>>> 2a24f8738a5d3f307cc768bf6d6ad7c9c4d17cd5
