const signupBtn = document.getElementById("signupBtn")

async function userSignup(){
const signupData = document.getElementById("signupForm")

const formData = new FormData(signupData);

const response = await fetch("/signup", {
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