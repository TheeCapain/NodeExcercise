<script>
    import { Router, Link, Route } from "svelte-navigator";
    import Home from "./pages/home/home.svelte";
    import Login from "./pages/register/register.svelte";
</script>

<Router>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
    </nav>
    <div>
        <Route path="/"><Home /></Route>
        <Route path="/login"><Login /></Route>
    </div>
</Router>
