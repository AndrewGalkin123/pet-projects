//  <p class="city-name">Moscow</p>
//           <img></img>
//           <p class="temperature"></p>
//           <p class="weather-description"></p>
//           <p class="wind-speed"></p>
//           <p class="visibility"></p>
//           <p class="pres"></p>

const cities = [
  { city: "Moscow", lat: 55.7558, lon: 37.6173 },
  { city: "Kyiv", lat: 50.4501, lon: 30.5234 },
  { city: "Berlin", lat: 52.52, lon: 13.405 },
  { city: "Praha", lat: 50.0755, lon: 14.4378 },
  { city: "NewYork", lat: 40.7128, lon: -74.006 },
];

for (let city of cities) {
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${city.lat}&lon=${city.lon}&exclude=minutely,hourly,daily&units=metric&appid=6959ff24dcebfc2b4a76d227c51cea86`;
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("Ошибка запроса к API");
      return response.json();
    })
    .then((data) => {
      const temp = data.current.temp; // Получаем текущую температуру
      console.log(`Current temp in ${city.city}: ${temp}°C`);
    })
    .catch((error) => console.error("Ошибка:", error));
}
