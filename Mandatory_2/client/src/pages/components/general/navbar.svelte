<script>
    import { Link } from "svelte-navigator";


    function logout() {
        sessionStorage.clear();
    }
</script>

<nav>
    <Link to="/home">Home</Link>
    <Link to="/login">Login</Link>
    <button on:click={logout}>Logout</button>
</nav>

<style>
</style>
