<script>
  import DailyWeather from "../components/homepage/dailyWeather.svelte";
  import WeeklyWeather from "../components/homepage/weeklyWeather.svelte";
  import AccessDenied from "../components/general/accessDenied.svelte";

  if (sessionStorage.getItem("Value")==="1") {
    window.location.replace("/Login");
  }
</script>

<main>
  <body>
    <h1 style="color:white">Overiew of weather in copenhagen</h1>
    <DailyWeather />
    <h1 style="color:white">Overiew of the next couple of days weather</h1>
    <WeeklyWeather />
  </body>
</main>
