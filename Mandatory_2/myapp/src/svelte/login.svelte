<script>
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
				<form id="signupForm" action="/signup" method="post">
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="email" name="email" placeholder="Email" required>
					<input type="password" name="pswd" placeholder="Password" required>
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
