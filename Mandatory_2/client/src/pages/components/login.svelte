<script>
    import { BASE_URL, global_user } from "../../store/global";

    async function userLogin() {
        console.log("We made it to javascript")
        const user = {
            email: document.getElementById("signup_email").value,
            pswd: document.getElementById("signup_pswd").value,
        };

        let response = await fetch(`${$BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(user),
        });

		if (response.ok) {
			console.log("All is good")
            const access = 1;
            const email = user.email;
            sessionStorage.setItem(user.email, String(access))
        }
    }
</script>
<input type="checkbox" id="chk" aria-hidden="true">
	
				<div class="login">
					<form>
						<label for="chk" aria-hidden="true">Login</label>
						<input id="signup_email" type="email" name="email" placeholder="Email" value="test@mail.com">
						<input id="signup_pswd" type="password" name="pswd" placeholder="Password" value="123">
						<button type="submit" on:click={userLogin}>Login</button>
                        <button>Forgot Password?</button>
					</form>
				</div>

<style>
#chk{
	display: none;
}

label{
	color: #fff;
	font-size: 2.3em;
	justify-content: center;
	display: flex;
	margin: 60px;
	font-weight: bold;
	cursor: pointer;
	transition: .5s ease-in-out;
}
input{
	width: 60%;
	height: 20px;
	background: #e0dede;
	justify-content: center;
	display: flex;
	margin: 20px auto;
	padding: 10px;
	border: none;
	outline: none;
	border-radius: 5px;
}
button{
	width: 60%;
	height: 40px;
	margin: 10px auto;
	justify-content: center;
	display: block;
	color: #fff;
	background: #573b8a;
	font-size: 1em;
	font-weight: bold;
	margin-top: 20px;
	outline: none;
	border: none;
	border-radius: 5px;
	transition: .2s ease-in;
	cursor: pointer;
}
button:hover{
	background: #6d44b8;
}
.login{
	height: 460px;
	background: #eee;
	border-radius: 60% / 10%;
	transform: translateY(-180px);
	transition: .8s ease-in-out;
}
.login label{
	color: #573b8a;
	transform: scale(.6);
}

#chk:checked ~ .login{
	transform: translateY(-500px);
}
#chk:checked ~ .login label{
	transform: scale(1);	
}


</style>