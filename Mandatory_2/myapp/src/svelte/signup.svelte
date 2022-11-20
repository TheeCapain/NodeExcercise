<script>
    import {BASE_URL} from "../global.js"
    const signupBtn = document.getElementById("signupBtn");

    async function userSignup() {
        console.log("in Signup")
        const signupData = document.getElementById("signupForm");

        const formData = new FormData(signupData);

        const response = await fetch(`${$BASE_URL}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        });

        const data = await response.json();
        if (response.ok) {
            sessionStorage.setItem("userId", data.data);
        } else {
            console.log("something went wrong");
        }
    }

    signupBtn.addEventListener("click", userSignup);
</script>
