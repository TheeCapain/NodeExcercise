<script>
	import { BASE_URL, global_user } from "../../../store/global";

	async function userSignup() {
		console.log("We made it to javascript");
		const user = {
			email: document.getElementById("email").value,
			pswd: document.getElementById("pswd").value,
		};

		let response = await fetch(`${$BASE_URL}/signup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(user),
		});

		if (response.ok) {
			console.log("All is good");
		}
	}
</script>

<input type="checkbox" id="chk" aria-hidden="true" />
<div class="signup">
	<form>
		<label for="chk" aria-hidden="true">Sign up</label>
		<input id="email" type="email" name="email" placeholder="Email" />
		<input id="pswd" type="password" name="pswd" placeholder="Password" />
		<button type="submit" on:click={userSignup}>Sign up</button>
	</form>
</div>

<style>
	.signup {
		position: relative;
		width: 100%;
		height: 100%;
	}
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
</style>
