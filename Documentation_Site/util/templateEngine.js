import fs from "fs";

const navComponent = fs.readFileSync("./public/components/navbar/nav.html").toString();
const footerComponent = fs.readFileSync("./public/components/footer/footer.html").toString();

export function renderPage(path, options = {}) {
    const page = fs.readFileSync(path).toString();

    return navComponent
        .replace("%%TAB_TITLE%%", options.tabTitle)
        .replace("%%PAGE_CSS_LINK%%",
            options.cssLink || ""
        ) 
        + page
        + footerComponent;
}

const article = fs.readFileSync("./public/pages/article/article.html").toString();
export const articlePage = navComponent.replace("%%PAGE_CSS_LINK%%",
`<link rel="stylesheet" href="/pages/article//article.css">`
) + article + footerComponent;