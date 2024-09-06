const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");

const API_keys = "6f71adad8f7c2b415e6a752f33ee4c34";
//const api = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

btn.addEventListener("click", () => {
  let city = input.value;

  //console.log(input.value);
  getWeather(city);
});

function getWeather(city) {
  console.log(city);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"6f71adad8f7c2b415e6a752f33ee4c34"}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const iconCode = data.weather[0].icon;
      icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}.png"/>`

      const WeatherCity = data.name;
      const WeatherCountry = data.sys.country;
      weather.innerHTML = `${WeatherCity}, ${WeatherCountry}`;
      
    
      const weatherTemp = data.main.temp;
      let newWeather = Math.round(weatherTemp - 273);
      temperature.innerHTML = `${newWeather}°C`

      const weatherDescp = data.weather[0]
      .description;
      description.innerHTML = `${weatherDescp}`


    });
}
