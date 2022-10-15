import { Router } from "express"

const articleRouter = Router();

articleRouter.get("/articles", (req, res) => {
    res.status(200).send({ data: articles })
})

articleRouter.get("/articles/:id", (req, res) => {
    console.log("der b")
    const article = articles.find(
   
        (article) => article.articleId === Number(req.params.id)
    );
    res.send({ data: article });
});


const articles = [
    {
        articleId: 1,
        articleTitle: "Uge 35",
        articleSummary: 'This week is an introduction to the course NodeJS, where we will refresh git commands and datatypes.Furthermore we will delve into what Node JS is and what it can be used for and have a look at REST API conventions and Package.json',
        subArticles: [
            {
                subArticlesId: 1,
                subTitle: `Git in the terminal`,
                text: `This week is an introduction to the course NodeJS, where we will refresh git commands and datatypes.Furthermore we will delve into what Node JS is and what it can be used for and have a look at REST API conventions and Package.json`,
                subImage: ''
            },
            {
                subArticlesId: 2,
                subTitle: `Data types in javascript`,
                text: `This week is an introduction to the course NodeJS, where we will refresh git commands and datatypes.Furthermore we will delve into what Node JS is and what it can be used for and have a look at REST API conventions and Package.json`,
                subImage: ''
            },
            {
                subArticlesId: 3,
                subTitle: `What is nodeJS?`,
                text: `This week is an introduction to the course NodeJS, where we will refresh git commands and datatypes.Furthermore we will delve into what Node JS is and what it can be used for and have a look at REST API conventions and Package.json`,
                subImage: ''
            },
            {
                subArticlesId: 4,
                subTitle: `REST API?`,
                text: `Placeholder text 3`,
                subImage: ''
            },
            {
                subArticlesId: 5,
                subTitle: `Package.JSON?`,
                text: `Placeholder text 3`,
                subImage: ''
            },
        ],
    }, 
    {
        articleId: 2,
        articleTitle: "Uge 36",
        articleSummary: 'Article Summary 2 here',
        subArticles: [
            {
                subArticlesId: 1,
                subTitle: `SubTitle 1`,
                text: `Placeholder text 1`,
            },
            {
                subArticlesId: 2,
                subTitle: `SubTitle 2`,
                text: `Placeholder text 2`,
            },
            {
                subArticlesId: 3,
                subTitle: `SubTitle 3`,
                text: `Placeholder text 3`,
            },
        ],
    },
    {
        articleId: 3,
        articleTitle: "Uge 37",
        articleSummary: 'Article Summary 3 here',
        subArticles: [
            {
                subArticlesId: 1,
                subTitle: `SubTitle 1`,
                text: `Placeholder text 1`,
            },
            {
                subArticlesId: 2,
                subTitle: `SubTitle 2`,
                text: `Placeholder text 2`,
            },
            {
                subArticlesId: 3,
                subTitle: `SubTitle 3`,
                text: `Placeholder text 3`,
            },
        ],
    },
    {
        articleId: 4,
        articleTitle: "Uge 38",
        articleSummary: 'Article Summary 4 here',
        subArticles: [
            {
                subArticlesId: 1,
                subTitle: `SubTitle 1`,
                text: `Placeholder text 1`,
            },
            {
                subArticlesId: 2,
                subTitle: `SubTitle 2`,
                text: `Placeholder text 2`,
            },
            {
                subArticlesId: 3,
                subTitle: `SubTitle 3`,
                text: `Placeholder text 3`,
            },
        ],
    },
    {
        articleId: 5,
        articleTitle: "Uge 39",
        articleSummary: 'Article Summary 5 here',
        subArticles: [
            {
                subArticlesId: 1,
                subTitle: `SubTitle 1`,
                text: `Placeholder text 1`,
            },
            {
                subArticlesId: 2,
                subTitle: `SubTitle 2`,
                text: `Placeholder text 2`,
            },
            {
                subArticlesId: 3,
                subTitle: `SubTitle 3`,
                text: `Placeholder text 3`,
            },
        ],
    },
    {
        articleId: 6,
        articleTitle: "Uge 40",
        articleSummary: 'Article Summary 6 here',
        subArticles: [
            {
                subArticlesId: 1,
                subTitle: `SubTitle 1`,
                text: `Placeholder text 1`,
            },
            {
                subArticlesId: 2,
                subTitle: `SubTitle 2`,
                text: `Placeholder text 2`,
            },
            {
                subArticlesId: 3,
                subTitle: `SubTitle 3`,
                text: `Placeholder text 3`,
            },
        ],
    },{
        articleId: 7,
        articleTitle: "Uge 41",
        articleSummary: 'Article Summary 7 here',
        subArticles: [
            {
                subArticlesId: 1,
                subTitle: `SubTitle 1`,
                text: `Placeholder text 1`,
            },
            {
                subArticlesId: 2,
                subTitle: `SubTitle 2`,
                text: `Placeholder text 2`,
            },
            {
                subArticlesId: 3,
                subTitle: `SubTitle 3`,
                text: `Placeholder text 3`,
            },
        ],
    },
]

export default articleRouter


