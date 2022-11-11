import { response } from "express";

fetch(`/api/:headline`)
.then(response => response.json())
.then(article =>{
    console.log(article)
})