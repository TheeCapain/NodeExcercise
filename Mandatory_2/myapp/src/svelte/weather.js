const weatherUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Copenhagen?unitGroup=metric&key=AK8K8TCEDGVRRJ46XE5UE4W5N&contentType=json'

async function weatherData(url){
const response = await fetch(url)
let data = await response.json()
console.log(data.days)
}


export default weatherData(weatherUrl)