import express from "express"

const app = express();
app.use(express.static("public"));


import articleRouter from "./public/routers/articleRouter.js";
import { renderPage, injectData } from "./util/templateEngine.js";
app.use(articleRouter);



const frontpagePage = renderPage("./public/pages/frontpage/frontpage.html", 


{ 
    tabTitle: "Welcome",
    cssLink: `<link rel="stylesheet" href="./public/components/navbar/header.css">` 
});

const articlePage = renderPage("./public/pages/article/article.html", {
    cssLink: `<link rel="stylesheet" href="/pages/article/article.css">` 
});


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/article/",(req,res) =>{
    console.log("no tingen")
    res.send(articlePage)
})

app.get("/article/:id", (req, res) =>{
    res.send(articlePage)
})

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});