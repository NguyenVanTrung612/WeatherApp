const APP_ID = `3f37c355123b5ebde1625f24562d66b3`;
const DEFAULT_VALUE = "--";

const searchInput = document.querySelector("#search-input");
const cityName = document.querySelector(".city-name");
const weatherStatus = document.querySelector(".weather-status");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");

const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".windspeed");

searchInput.addEventListener("change", (event) => {
  // Test input when user write and submit enter
  //   console.log(["searchInput"], event);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${APP_ID}&units=metric&lang=vi`
  ).then(async (result) => {
    const data = await result.json();
    // console.log(["search input"], data);
    // if data not return name, get default value
    cityName.innerHTML = data.name || DEFAULT_VALUE;
    weatherStatus.innerHTML = data.weather[0].description || DEFAULT_VALUE;
    weatherIcon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
    temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
    sunrise.innerHTML =
      moment.unix(data.sys.sunrise).format("H:mm") || DEFAULT_VALUE;
    sunset.innerHTML =
      moment.unix(data.sys.sunset).format("H:mm") || DEFAULT_VALUE;
    humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
    // convert m/h => km/h to * 3.6
    windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE;
  });
});
