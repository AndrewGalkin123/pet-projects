const apiKey = "7542f185deb047f5a194364c4c7bda87"; // Замени на свой реальный API ключ
const city = "Moscow"; // Название города
const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Ошибка запроса к API");
    }

    return response.json(); // Преобразуем ответ в JSON
  })
  .then((data) => {
    console.log("Текущая температура в Москве:", data.data[0]);
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });
