
const navbar = document.getElementById("list")

async function createNavbar() {
    const response = await fetch(
        `/articles`
    );
    const articles = await response.json();

    console.log(articles.data.articleTitle)

    articles.data.subarticles.forEach((article) => {
        let liTag = document.createElement("li")
        let aTag = document.createElement("a")
        console.log(article.data.articleTitle)

        aTag.innerText = article.articleTitle

    }
    )
}