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
<body>
    <div id="forecast">
    <Grid>
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

<style>
  #forecast {
    justify-content: center;
    margin: auto;
    width: 80%;
  }
  </style>
  
