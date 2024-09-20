const apiKey = "6959ff24dcebfc2b4a76d227c51cea86"; // Замени на свой реальный API-ключ
const cities = [
  { name: "Moscow", lat: 55.7558, lon: 37.6173 },
  { name: "Kyiv", lat: 50.4501, lon: 30.5234 },
  { name: "Berlin", lat: 52.52, lon: 13.405 },
  { name: "Praha", lat: 50.0755, lon: 14.4378 },
  { name: "New York", lat: 40.7128, lon: -74.006 },
];

let index = 0;
const swiperSlides = document.getElementsByClassName("swiper-slide");

for (let city of cities) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("Ошибка запроса к API");
      return response.json();
    })
    .then((data) => {
      swiperSlides[index].append(
        Object.assign(document.createElement("p"), {
          innerHTML: `<p class="current-place">Current place:<p/>${city.name}`,
        })
      );
      swiperSlides[index].append(
        Object.assign(document.createElement("img"), {
          src: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        })
      );
      swiperSlides[index].append(
        Object.assign(document.createElement("p"), {
          innerHTML: data.weather[0].description.toUpperCase(),
        })
      );
      swiperSlides[index].append(
        Object.assign(document.createElement("p"), {
          innerHTML: `Wind speed: ${data.wind.speed}`,
        })
      );
      swiperSlides[index].append(
        Object.assign(document.createElement("p"), {
          innerHTML: `Pressure: ${data.main.pressure}`,
        })
      );
      console.log(data);
      index++;
    })
    .catch((error) => console.error("Ошибка:", error));
}
