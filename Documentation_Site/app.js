import express from "express"

const app = express();
app.use(express.static("public"));

import { renderPage } from "./util/templateEngine.js";

const frontpagePage = renderPage("./public/pages/frontpage/frontpage.html", 
{ 
    tabTitle: "Welcome",
    cssLink: `<link rel="stylesheet" href="./public/components/navbar/header.css">` 
});


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});