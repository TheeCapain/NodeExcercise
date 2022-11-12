import './svelte/app.css'
import App from './svelte/main.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app
