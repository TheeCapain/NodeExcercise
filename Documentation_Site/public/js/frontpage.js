function todo(){
    fetch("/header").
    then(resolve =>resolve.json().
    then(res=>{
       let menu = res.menu
       let homeBtn = res.homeBtn

       console.log(homeBtn)
       appendMenu(menu, homeBtn)
    })
)}

function appendMenu(menu, homeBtn){
    let logo = document.getElementById("logo")
    let home = document.createElement("h1")
    let logocontent = document.createElement("a")
    logocontent.textContent=homeBtn[0].title
    logocontent.setAttribute("href", homeBtn[0].href)
    logo.appendChild(home)
    home.appendChild(logocontent)

   let navbar = document.getElementById("list")

   for(let i = 0; i<menu.length; i++){
    let option = document.createElement("li")
    let content = document.createElement("a")
    content.setAttribute("href", menu[i].href)
    content.textContent = menu[i].title
    navbar.appendChild(option)
    option.appendChild(content)
   }




}


todo()