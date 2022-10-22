import express from "express"

const app = express();
app.use(express.static("public"));

import userRouter from "./public/routers/userRouter.js";
import articleRouter from "./public/routers/articleRouter.js";
import { renderPage, injectData } from "./util/templateEngine.js";
app.use(express.json());
app.use(articleRouter);
app.use(userRouter);



const frontpagePage = renderPage("./public/pages/frontpage/frontpage.html",
    {
        tabTitle: "Welcome",
        cssLink: `<link rel="stylesheet" href="./public/components/navbar/header.css">`
    });

const Uge35 = renderPage("./public/pages/article/Uge_35/U35.html", 
{
    tabTitle: "week 35",
    cssLink: `<link rel="stylesheet" href="/pages/article/Uge_35/U35.css">`
});

const Uge36 = renderPage("./public/pages/article/Uge_36/U36.html", 
{
    tabTitle: "week 36",
    cssLink: `<link rel="stylesheet" href="/pages/article/Uge_35/U35.css">`
});

const Uge37 = renderPage("./public/pages/article/Uge_37/U37.html", 
{
    tabTitle: "week 37",
    cssLink: `<link rel="stylesheet" href="/pages/article/Uge_35/U35.css">`
});

const Uge38 = renderPage("./public/pages/article/Uge_38/U38.html", 
{
    tabTitle: "week 38",
    cssLink: `<link rel="stylesheet" href="/pages/article/Uge_35/U35.css">`
});

const Uge39 = renderPage("./public/pages/article/Uge_39/U39.html", 
{
    tabTitle: "week 39",
    cssLink: `<link rel="stylesheet" href="/pages/article/Uge_35/U35.css">`
});

const Uge40 = renderPage("./public/pages/article/Uge_40/U40.html", 
{
    tabTitle: "week 40",
    cssLink: `<link rel="stylesheet" href="/pages/article/Uge_35/U35.css">`
});

const Uge41 = renderPage("./public/pages/article/Uge_41/U41.html", 
{
    tabTitle: "week 41",
    cssLink: `<link rel="stylesheet" href="/pages/article/Uge_35/U35.css">`
});

const LoginPage = renderPage("./public/pages/login/login.html", 
{
    tabTitle: "login",
    cssLink: `<link rel="stylesheet" href="./public/pages/login/login.css">`
})

const adminPage = renderPage("./public/pages/admin_page/admin.html", 
{
    tabTitle: "Admin",
    cssLink: `<link rel="stylesheet" href="./public/pages/admin_page/admin.css">`
})


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/login", (req, res) => {
        res.send(LoginPage)
})

app.get("/admin",(req,res)=>{
    res.send(adminPage)
})

app.get("/uge35/", (req, res) => {
    res.send(Uge35)
})

app.get("/uge36/", (req, res) => {
    res.send(Uge36)
})

app.get("/uge37/", (req, res) => {
    res.send(Uge37)
})

app.get("/uge38/", (req, res) => {
    res.send(Uge38)
})

app.get("/uge39/", (req, res) => {
    res.send(Uge39)
})

app.get("/uge40/", (req, res) => {
    res.send(Uge40)
})

app.get("/uge41/", (req, res) => {
    res.send(Uge41)
})

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});