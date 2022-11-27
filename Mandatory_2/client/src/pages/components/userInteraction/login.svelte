<script>
	import { BASE_URL } from "../../../store/global";
	import Notification from "../general/notification.svelte";
	import { useForm } from "svelte-use-form";
	import { useNavigate, useLocation, Link } from "svelte-navigator";
	import { token } from "../../../store/global";

	const form = useForm();

	let userNotification = "";

	function redirectLogin(){
		userLogin()
		window.location.replace("/home");
	}

	async function userLogin() {
		const access = 1;
	
		let mail = "";
		let password = "";

		const user = {
			// @ts-ignore
			email: document.getElementById("login_email").value,
			// @ts-ignore
			password: document.getElementById("login_password").value,
		};
	
		let response = await fetch(`${$BASE_URL}/api/users/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(user),
		});
		if (response.ok) {
			window.location.replace("/home");
			mail = "";
			password = "";
		} else {
			userNotification = "Wrong login credentials";
		}
	}
</script>

<input type="checkbox" id="chk" aria-hidden="true" />

<div class="login">
	<form>
		<label for="chk" aria-hidden="true">Login</label>
		<input
			type="email"
			placeholder="Enter Email"
			id="login_email"
			name="email"
			required
		/>
		<input
			type="password"
			placeholder="Enter Password"
			id="login_password"
			name="password"
			required
		/>
		<button on:click={redirectLogin}> Login</button>
		<Notification {userNotification} />
		<button>Forgot Password?</button>
	</form>
</div>

<style>
	label {
		color: #fff;
		font-size: 2.3em;
		justify-content: center;
		display: flex;
		margin: 60px;
		font-weight: bold;
		cursor: pointer;
		transition: 0.5s ease-in-out;
	}
	input {
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
	button {
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
		transition: 0.2s ease-in;
		cursor: pointer;
	}
	button:hover {
		background: #6d44b8;
	}
	.login {
		height: 460px;
		background: #eee;
		border-radius: 60% / 10%;
		transform: translateY(-180px);
		transition: 0.8s ease-in-out;
	}
	.login label {
		color: #573b8a;
		transform: scale(0.6);
	}
</style>
