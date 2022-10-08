import fs from "fs";

const navComponent = fs.readFileSync("./public/components/navbar/nav.html").toString();

export function renderPage(path, options = {}) {
    const page = fs.readFileSync(path).toString();

    return navComponent
        .replace("%%TAB_TITLE%%", options.tabTitle)
        .replace("%%PAGE_CSS_LINK%%",
            options.cssLink || ""
        ) 
        + page;
}