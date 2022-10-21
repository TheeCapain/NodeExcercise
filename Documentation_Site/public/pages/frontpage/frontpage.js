const content = document.getElementById("content")

//Kig i U41
fetch(`/articles`)
.then(response => response.json())
.then(articles => {

    articles.data.forEach(article => {
       let articletitle = document.getElementById("article_title")
       articletitle.textContent = article.articleTitle
       let articleText = document.getElementById("article_text")
       articleText.textContent = article.articleSummary
       console.log(article.articleSummary)
    });
});