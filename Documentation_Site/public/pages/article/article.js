import { response } from "express";

fetch("/api/articles")
.then(response => response.json())
.then(result => {
    console.log(result)
})
{

}