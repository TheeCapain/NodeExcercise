const loginButton = document.getElementById("login");

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
  const user = await response.json()
    if((response.ok)){
        console.log("User set")
        const user = await response.json()
        sessionStorage.setItem("userId", user.data)
    } else{
        console.log()
        console.log("something went wrong")
    }


}


loginButton.addEventListener("click", getLoginInfo);