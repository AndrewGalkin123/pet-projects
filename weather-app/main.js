//  <p class="city-name">Moscow</p>
//           <img></img>
//           <p class="temperature"></p>
//           <p class="weather-description"></p>
//           <p class="wind-speed"></p>
//           <p class="visibility"></p>
//           <p class="pres"></p>

const cities = ["Moscow", "Kyiv", "Berlin", "Praha", "NewYork"];

for (let city of cities) {
  const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=7542f185deb047f5a194364c4c7bda87`;
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("Ошибка запроса к API");
      return response.json();
    })
    .then((data) => {
      console.log(`Current temp in ${city}`, data.data[0]);
    });
}
