
async function getLoginInfo(){
const response = fetch("/login",{
        method: "POST",
        headers:"application/json",
        body:JSON.stringify(object.fromEntries(formData))
    })
}