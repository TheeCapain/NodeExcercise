<script>
  import { Grid, Row, Column } from "carbon-components-svelte";
  import "carbon-components-svelte/css/white.css";

  async function getWeather() {
    const res = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Copenhagen?unitGroup=metric&key=AK8K8TCEDGVRRJ46XE5UE4W5N&contentType=json`
    );
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      return data;
    } else {
      throw new Error(data);
    }
  }

  let promise = getWeather();
</script>

<main>
  <body>
    <link rel="stylesheet" href="main.css">
 
  <div class="today">  	
		<div>
      {#await promise}
      <p>Loading weather data</p>
      {:then data } 
      <p style="color: black"> {data.days[0].datetime}</p>
      <p style="color: black">max: {data.days[0].tempmax}</p>
      <p style="color: black">max: {data.days[0].tempmin}</p>
      <p style="color: v">cur: {data.days[0].temp}</p>
      <p style="color: v">Des: {data.days[0].description}</p>
      <p style="color: v">cur: {data.address}</p>
      <img src="" alt="">
      {/await}
		</div>
	</div>

<div id="forecast">
  <Grid >
    <Row>
      {#await promise}
        <p>Loading weather data</p>
        <!--Kan dette laves til et for each loop?-->
      {:then data}
        <Column style="color: white"
          >{data.days[1].datetime}
          <p style="color: white">max: {data.days[1].tempmax}</p>
          <p style="color: white">max: {data.days[1].tempmin}</p>
          <p style="color: white">cur: {data.days[1].temp}</p>
        </Column>
        <Column style="color: white"
          >{data.days[2].datetime}
          <p style="color: white">max: {data.days[2].tempmax}</p>
          <p style="color: white">max: {data.days[2].tempmin}</p>
          <p style="color: white">cur: {data.days[2].temp}</p>
        </Column>
        <Column style="color: white"
          >{data.days[3].datetime}
          <p style="color: white">max: {data.days[3].tempmax}</p>
          <p style="color: white">max: {data.days[3].tempmin}</p>
          <p style="color: white">cur: {data.days[3].temp}</p>
        </Column>
        <Column style="color: white"
          >{data.days[4].datetime}
          <p style="color: white">max: {data.days[4].tempmax}</p>
          <p style="color: white">max: {data.days[4].tempmin}</p>
          <p style="color: white">cur: {data.days[4].temp}</p>
        </Column>
        <Column style="color: white"
          >{data.days[5].datetime}
          <p style="color: white">max: {data.days[5].tempmax}</p>
          <p style="color: white">max: {data.days[5].tempmin}</p>
          <p style="color: white">cur: {data.days[5].temp}</p>
        </Column>
        <Column style="color: white"
          >{data.days[6].datetime}
          <p style="color: white">max: {data.days[6].tempmax}</p>
          <p style="color: white">max: {data.days[6].tempmin}</p>
          <p style="color: white">cur: {data.days[6].temp}</p>
        </Column>
      {:catch error}
        <p style="color: red">{error.message}</p>
      {/await}
    </Row>
  </Grid>
</div>
</body>
</main>

<style>
  body{
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Jost', sans-serif;
	background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
}

.today{
	width: 100%;
	height: 100%;
	background: rgb(226, 221, 221);
	overflow: hidden;
	border-radius: 10px;
	box-shadow: 5px 20px 50px #000;
	margin: auto;
}

#forecast{
	width: 320px;
	padding: 10px;
	border: 5px solid gray;
	margin: 0;
}
</style>