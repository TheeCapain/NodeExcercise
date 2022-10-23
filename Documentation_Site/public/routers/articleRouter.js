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
        articleTitle: "Lesson 1",
        articleSummary: 'This week is an introduction to the course NodeJS, where we will refresh git commands and datatypes. Furthermore we will delve into what Node JS is and what it can be used for and have a look at REST API conventions and Package.json',
        subArticles: [
            {
                subArticlesId: 1,
                subTitle: `Data types in javascript`,
                text: `article: As in all other programming languages we are working with datatypes in javascript. 
                However in javascript we do not need to declare that an int is an int the same way we do in Java. As seen in the picture below Javascript knows what each datatype needs 
                to be simply by defining it. however if for example we choose to write a string + a number. The variable will come out as a string instead of a number as the latter would
                result in an error. Javascript have dynamic variables meaning you can change the value of a given variable from an int to a string simply by changing its content.
                In case you use the built in functions such as “Number(x)” on a string it will give you an error NaN meaning not a number. `,
                img: './pages/article/Uge_35/images/dt.png'
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
                img: './pages/article/Uge_35/images/endpoints.png'
            },
        ],
    }, 
    {
        articleId: 2,
        articleTitle: "Lesson 2",
        articleSummary: 'This week was about callback functions, sending data with get requests and git commands',
        subArticles: [
            {
                subArticlesId: 1,
                subTitle: `Callback functions`,
                text: `Callback functions means passing an argument that is a method as the example below. Our Processuserinput function gets the input of our function greeting which has the name parameter. However we first go through the processuserInput which has the const name value from the users keyboard. Then we call the name through the callback parameter. `,
                img: './pages/article/Uge_36/images/cbFunctinos.png'
            },
            {
                subArticlesId: 2,
                subTitle: `Sending data with GET requests`,
                text: `When using get request we need to have som data to manipulate and use. in this example we have a list of pokemons wrapped in JSON Objects that have the attributes: id, name and type. On line 24. the the get request has the endpoint /pokemon and sends the res.send(pokemon.name).
                `,
                img: './pages/article/Uge_36/images/pokemon.png'
            },
            {
                subArticlesId: 3,
                subTitle: `Git Commands`,
                text: `With the use of terminal commands we can run different things such as either git commands or utilities. In this project, i have used git to push, and add changes to github. This is done as follows. this will add all files and commit the changes, and lastly push it to github. `,
                img: './pages/article/Uge_36/images/terminal.png'
            },
        ],
    },
    {
        articleId: 3,
        articleTitle: "Lesson 3",
        articleSummary: 'This week we talked about arrow functions and import/Exporting',
        subArticles: [
            {
                subArticlesId: 1,
                subTitle: `Arrow functions`,
                text: `arrow functions are expressions that can be used with and without variables. An argument for using arrow functions is that they can make code shorter. They are recognized by the '=>' arrow symbol. Here is an example `,
                img: './pages/article/Uge_37/images/arrow.png'
            },
            {
                subArticlesId: 2,
                subTitle: `Import`,
                text: `We can import sections of a library by specifying what we want from it. The following shows that we want specifically routers from the express library
                In javascript we can import libraries for functionality such as routers from express. in the following shot:`,
                img: './pages/article/Uge_37/images/import.png'
            },
            {
                subArticlesId: 3,
                subTitle: `Export`,
                text: `When wanting to use classes - in this case the article router, we can export it and use it elsewhere by writing the following. `,
                img: './pages/article/Uge_37/images/export.png'
            },
        ],
    },
    {
        articleId: 4,
        articleTitle: "Lesson 4",
        articleSummary: 'We learned about package.json, CRUD and CSS',
        subArticles: [
            {
                subArticlesId: 1,
                subTitle: `Package.JSON`,
                text: `package.JSON holds metadata that is relevant to the project and is our entryway to it. we can define how the project is supposed to run and handle its dependencies from here. It could also hold licenses, version control and any other data that might be needed for the project. it can also contain run environments. Here is an example of what it could contain: `,
                img: './pages/article/Uge_38/images/json.png'
            },
            {
                subArticlesId: 2,
                subTitle: `CRUD`,
                text: `Stands for Create, Read, Update and Delete respectively and is a rule of thumb of what ways you should be able to manipulate data when working with APIs. `,
                img: ''
            },
            {
                subArticlesId: 3,
                subTitle: `CSS`,
                text: `CSS stands for Cascading Style sheets and is used for styling HTML. It describes how elements are supposed to look. CSS files needs to be linked in the HTML files for them to have any effect on the page and is done as the example below:`,
                img: './pages/article/Uge_38/images/css.png'
            },
        ],
    },
    {
        articleId: 5,
        articleTitle: "Lesson 5",
        articleSummary: 'In this lesson we went over the environmental variables and fetching from both frontend and backend',
        subArticles: [
            {
                subArticlesId: 1,
                subTitle: `Environment variables`,
                text: `Environmental variables are variables whose value is set outside the program. For example we can setup which port we want our program to run at without the need to write it inside the code we are currently writing. in the following example it is set to 8080 outside the program and is defined as PORT:`,
                img: './pages/article/Uge_39/images/env.png'
            },
            {
                subArticlesId: 2,
                subTitle: `Fetching in the frontend`,
                text: `Data can be fetched in the frontend by calling an endpoint that serves the data as seen on the image below. The data can the be pulled out and manipulated. For example the content on this page has been pulled out an every element has been created in javascript. to call something from the backend your function needs to be async so you can use the await function, which makes sure all the data is read before it proceeds`,
                img: './pages/article/Uge_39/images/fetch front.png'
            },
            {
                subArticlesId: 3,
                subTitle: `Fetching in the backend`,
                text: `To fetch in the backend we use Express which has the use function. here we can get an endpoint and serve whatever we want from here wether it be Pages we create or a string we would like to send to the frontend. We save Express() in the const called app, which allows us to use that library. `,
                img: './pages/article/Uge_39/images/fetch back.png'
            },
        ],
    },
    {
        articleId: 6,
        articleTitle: "Lesson 6",
        articleSummary: 'This week is all about how to render pages',
        subArticles: [
            {
                subArticlesId: 1,
                subTitle: `Server side rendering`,
                text: `Server side rendering allows for the content of a given page to be rendered before being viewed. Meaning it is created in the backend of the application. It is used for improving site speed but can be harder to impliment. in the example below a function is used to render the HTML page before it is sent to the front. `,
                img: './pages/article/Uge_40/images/render.png'
            },
            {
                subArticlesId: 2,
                subTitle: `client side rendering`,
                text: `Client side rendering means that it is the javascript engine that generates the content of a given browser. it is the users browser that generates all the content. Since the browser needs to run the whole application in this case, the page will usually be slower. `,
                img: ''
            },
        ],
    },{
        articleId: 7,
        articleTitle: "Lesson 7",
        articleSummary: 'This week is about seperating data, and injecting it when needed',
        subArticles: [
            {
                subArticlesId: 1,
                subTitle: `Inject Data`,
                text: `It is possible to inject data into files by splitting them. In the example below we can see that variables have been put into a script`,
                img: './pages/article/Uge_41/images/inject.png'
            },
            {
                subArticlesId: 2,
                subTitle: `Express Routers`,
                text: `Routers can be used to split endpoints into their respective classes as to avoid everything being in a single file.`,
                img: ''
            },
        ],
    },
]

export default articleRouter


