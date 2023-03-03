const lat = 58.7984;
const lng = 17.8081;
const params = 'windSpeed';

fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
  headers: {
    'Authorization': '1faee480-b9ab-11ed-bce5-0242ac130002-1faee570-b9ab-11ed-bce5-0242ac130002'
  }
}).then((response) => response.json()).then((jsonData) => {
  console.log(jsonData)
});