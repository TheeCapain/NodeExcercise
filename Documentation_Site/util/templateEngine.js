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

export function injectData(pageString, data) {
    const brokenUpHTML = pageString.split("</head>");
    const variableName = Object.keys(data)[0];
    return brokenUpHTML[0] + 
        `<script>const ${variableName} = ${JSON.stringify(data[variableName])}</script></head>` + 
        brokenUpHTML[1];

}