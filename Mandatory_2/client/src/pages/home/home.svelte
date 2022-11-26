<script>
  import DailyWeather from "../components/homepage/dailyWeather.svelte";
  import WeeklyWeather from "../components/homepage/weeklyWeather.svelte";
  import { Link, navigate } from "svelte-routing";
  import { token } from "./../../store.js";

  function logout() {
    localStorage.clear();
    token.set(localStorage.getItem("token"));
  }
</script>

<main>
  <body>
    <h1 style="color:white">Overiew of weather in copenhagen</h1>
    <DailyWeather />
    <h1 style="color:white">Overiew of the next couple of days weather</h1>
    <WeeklyWeather />
    <h2>
    </h2>
  </body>
</main>
