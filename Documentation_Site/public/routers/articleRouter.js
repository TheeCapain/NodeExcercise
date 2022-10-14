import { Router } from "express"

const articleRouter = Router();

articleRouter.get("/articles", (req, res) => {
    res.status(200).send({ data: articles })
})

articleRouter.get("/articles/:id", (req, res) => {
    const article = articles.find(
        (article) => article.articleId === Number(req.params.id)
    );
    res.send({ data: article });
});


const articles = [
    {
        articleId: 1,
        articleTitle: "Uge 35",
        articleSummary: 'Article Summary 1 here',
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
]

export default articleRouter


