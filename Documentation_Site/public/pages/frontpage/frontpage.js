function fetchContent(){
    fetch("/content").
    then(resolve =>resolve.json().
    then(res=>{
       let articleTitle = res.articleTitle
       let articleContent = res.articleContent
    })
)}

