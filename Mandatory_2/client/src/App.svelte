<script>
    import { Router, Link, Route } from "svelte-navigator";
    import Home from "./pages/home/home.svelte";
    import Login from "./pages/register/register.svelte";
    import Navbar from "./pages/components/general/navbar.svelte";
</script>

<Router>
 <Navbar/>
    <div>
        <Route path="/"><Home /></Route>
        <Route path="/login"><Login /></Route>
    </div>
</Router>



