<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Home from "./home.svelte";
</script>
<main>
<body>
  <link rel="stylesheet" href="app.css">
	<div class="main">  	
		<div>
			<label for="wth" class="site-titel">Weather App</label>
		</div>
		<input type="checkbox" id="chk" aria-hidden="true">

			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required>
					<input type="email" name="email" placeholder="Email" required>
					<input type="password" name="pswd" placeholder="Password" required>
					<button>Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" value="test@mail.com" required>
					<input type="password" name="pswd" placeholder="Password" value="123" required>
					 <button>Login</button> 
						
				</form>
			</div>
	</div>
</body>
</main>
