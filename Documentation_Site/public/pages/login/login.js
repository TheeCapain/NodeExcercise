const loginButton = document.getElementById("login");


async function getLoginInfo() { 
  const form = document.getElementById("form-info");
  const formData = new FormData(form);
  console.log(formData)
  
  const response = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });


  const data = await response.json();
  console.log(data.body)
  if(response.ok) {
    console.log(data.data)
    sessionStorage.setItem("userId", data.data);
    window.location.replace("/");
    } else{
        console.log(Error)
        console.log("something went wrong")
    }


}


loginButton.addEventListener("click", getLoginInfo);