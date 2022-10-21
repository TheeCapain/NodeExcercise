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
        articleTitle: "Week 35",
        articleSummary: 'This week is an introduction to the course NodeJS, where we will refresh git commands and datatypes.Furthermore we will delve into what Node JS is and what it can be used for and have a look at REST API conventions and Package.json',
        subArticles: [
            {
                subArticlesId: 1,
                subTitle: `Data types in javascript`,
                text: `article: As in all other programming languages we are working with datatypes in javascript. 
                However in javascript we do not need to declare that an int is an int the same way we do in Java. As seen in the picture below Javascript knows what each datatype needs 
                to be simply by defining it. however if for example we choose to write a string + a number. The variable will come out as a string instead of a number as the latter would
                result in an error. Javascript have dynamic variables meaning you can change the value of a given variable from an int to a string simply by changing its content.
                In case you use the built in functions such as “Number(x)” on a string it will give you an error NaN meaning not a number. `,
                img: ''
            },
            {
                subArticlesId: 2,
                subTitle: `What is nodeJS?`,
                text: `nodeJS is an open-source javascript runtime environment that can execute javascript code outside of a web browser. In other words it is a framework for
                javascript. It allows us to write and run backend applications in a standalone environment. NodeJS is asynchronous which means it does not wait for an API to return data. `,
                img: ''
            },
            {
                subArticlesId: 3,
                subTitle: `REST API?`,
                text: `An API meaning application programming interface, is a aset of rules that define how applications or devices can connect and communicate with eachother.
                When creating a rest API there are certain conventions that are neat to uphold. for example the endpoints should be plural:
                `,
                img: ''
            },
        ],
    }, 
    {
        articleId: 2,
        articleTitle: "Week 36",
        articleSummary: 'Article Summary 2 here',
        subArticles: [
            {
                subArticlesId: 1,
                subTitle: `Callback functions`,
                text: `Placeholder text 1`,
                img: ''
            },
            {
                subArticlesId: 2,
                subTitle: `Sending data with GET requests`,
                text: `Placeholder text 2`,
                img: ''
            },
            {
                subArticlesId: 3,
                subTitle: `Clean Code and code conventions`,
                text: `Placeholder text 3`,
                img: ''
            },
        ],
    },
    {
        articleId: 3,
        articleTitle: "Week 37",
        articleSummary: 'Article Summary 3 here',
        subArticles: [
            {
                subArticlesId: 1,
                subTitle: `SubTitle 1`,
                text: `Placeholder text 1`,
                img: ''
            },
            {
                subArticlesId: 2,
                subTitle: `SubTitle 2`,
                text: `Placeholder text 2`,
                img: ''
            },
            {
                subArticlesId: 3,
                subTitle: `SubTitle 3`,
                text: `Placeholder text 3`,
                img: ''
            },
        ],
    },
    {
        articleId: 4,
        articleTitle: "Week 38",
        articleSummary: 'Article Summary 4 here',
        subArticles: [
            {
                subArticlesId: 1,
                subTitle: `SubTitle 1`,
                text: `Placeholder text 1`,
                img: ''
            },
            {
                subArticlesId: 2,
                subTitle: `SubTitle 2`,
                text: `Placeholder text 2`,
                img: ''
            },
            {
                subArticlesId: 3,
                subTitle: `SubTitle 3`,
                text: `Placeholder text 3`,
                img: ''
            },
        ],
    },
    {
        articleId: 5,
        articleTitle: "Week 39",
        articleSummary: 'Article Summary 5 here',
        subArticles: [
            {
                subArticlesId: 1,
                subTitle: `SubTitle 1`,
                text: `Placeholder text 1`,
                img: ''
            },
            {
                subArticlesId: 2,
                subTitle: `SubTitle 2`,
                text: `Placeholder text 2`,
                img: ''
            },
            {
                subArticlesId: 3,
                subTitle: `SubTitle 3`,
                text: `Placeholder text 3`,
                img: ''
            },
        ],
    },
    {
        articleId: 6,
        articleTitle: "Week 40",
        articleSummary: 'Article Summary 6 here',
        subArticles: [
            {
                subArticlesId: 1,
                subTitle: `SubTitle 1`,
                text: `Placeholder text 1`,
                img: ''
            },
            {
                subArticlesId: 2,
                subTitle: `SubTitle 2`,
                text: `Placeholder text 2`,
                img: ''
            },
            {
                subArticlesId: 3,
                subTitle: `SubTitle 3`,
                text: `Placeholder text 3`,
                img: ''
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
                img: ''
            },
            {
                subArticlesId: 2,
                subTitle: `SubTitle 2`,
                text: `Placeholder text 2`,
                img: ''
            },
            {
                subArticlesId: 3,
                subTitle: `SubTitle 3`,
                text: `Placeholder text 3`,
                img: ''
            },
        ],
    },
]

export default articleRouter


