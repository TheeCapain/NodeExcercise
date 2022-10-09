function getArticle(){
fetch("/article").
then(resolve=>resolve.json())
.then(res=>{
    let articles = res.articles
    console.log(articles[0].headline)
})
}

const pathVariables = location.pathname.split("/");
const pokemonName = pathVariables.pop();

console.log(pokemonName);

getArticle()