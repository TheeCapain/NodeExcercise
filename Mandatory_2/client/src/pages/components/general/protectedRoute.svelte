<script>
    import { Route, Link } from 'svelte-routing';
    import accessDenied from './accessDenied.svelte';
    import { token } from '../../../store.js';

    //export let path;
    //export let component;

   // $: isAuthenticated = $token;
   //{#if isAuthenticated}
    //<Route path={path} component={component} />
//{:else}
  //  <Route path={path} component={accessDenied} />
//{/if}
</script>
