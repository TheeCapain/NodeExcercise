<script>
    import { Router, Link, Route } from "svelte-navigator";
    import Home from "./pages/home/home.svelte";
    import Login from "./pages/register/register.svelte";
    import Navbar from "./pages/components/general/navbar.svelte";
    import AccessDenied from "./pages/components/general/accessDenied.svelte";

</script>

<Router>
 <Navbar/>
    <div>
        <Route path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/denied" component={AccessDenied}></Route>
    </div>
</Router>



