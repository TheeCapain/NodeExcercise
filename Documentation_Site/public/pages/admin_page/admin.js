
//Tjekker om der er en user i session
let session = sessionStorage.getItem("userId")
console.log(session)
if(session==null){
  window.location.replace("/login");
}

function logout(){
  console.log("bruger logget ud")
  sessionStorage.clear()
  window.location.replace("/");
}

const logoutbtn = document.getElementById("Logout")


logoutbtn.addEventListener("click", logout)