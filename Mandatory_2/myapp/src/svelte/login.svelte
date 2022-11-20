<script>
    import { link } from "svelte-navigator";
	import Home from "./home.svelte";
	
	

</script>
<main>
<body>
	<div class="main">  	
		<div>
			<label for="wth" class="site-titel">Weather App</label>
		</div>
			<div class="signup">
				<form id="signupForm" method="post">
					<input type="text" id="mail" name="mail">
					<input type="password" id="pswd" name="pswd">
					<input id="signupBtn" type="submit" value="Submit">
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" value="test@mail.com" required>
					<input type="password" name="pswd" placeholder="Password" value="123" required>
					 <button><Home/></button> 
						
				</form>
			</div>
	</div>
</body>
</main>
