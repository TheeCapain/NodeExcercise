const loginButton = document.getElementById("login");

//Ikke den smarteste, måde skal laves om
const session = sessionStorage.getItem("userId")
console.log(session)
if(session!=null){
  window.location.replace("/admin");
}


async function getLoginInfo() { 
  const form = document.getElementById("form-info");
  const formData = new FormData(form);
  
  const response = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });


  const data = await response.json();
  if(response.ok) {
    sessionStorage.setItem("userId", data.data);
    window.location.replace("/login");
    } else{
        console.log("something went wrong")
    }


}


loginButton.addEventListener("click", getLoginInfo);