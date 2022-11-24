<script>
  import "carbon-components-svelte/css/white.css";

  async function getWeather() {
    const res = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Copenhagen?unitGroup=metric&key=AK8K8TCEDGVRRJ46XE5UE4W5N&contentType=json`
    );
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw new Error(data);
    }
  }

  let promise = getWeather();
</script>

<main>
  <link rel="stylesheet" href="main.css" />
  <div class="today">
    <div>
      {#await promise}
        <p>Loading weather data</p>
      {:then data}
        <p style="color: black">{data.days[0].datetime}</p>
        <p style="color: black">max: {data.days[0].tempmax}</p>
        <p style="color: black">max: {data.days[0].tempmin}</p>
        <p style="color: v">cur: {data.days[0].temp}</p>
        <p style="color: v">Des: {data.days[0].description}</p>
        <p style="color: v">loc: {data.resolvedAddress}</p>
      {/await}
    </div>
  </div>
</main>

<style>
  .today {
    background: rgb(255, 255, 255);
    justify-content: center;
    box-shadow: 5px 20px 50px #000;
    margin: auto;
    width: 80%;
  }
</style>
