let nowDateTime = new Date();
nowDateTime.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let nowDay = days[nowDateTime.getDay()];
let nowHOURS = nowDateTime.getHours();
let nowMinutes = nowDateTime.getMinutes();
let currentDate = document.querySelector("h5#currentDayTime");
currentDate.innerHTML = `${nowDay}, ${nowHOURS}:${nowMinutes}`;
function showCityName(event) {
  event.preventDefault();
  let cityName = document.querySelector("input#searchCityEngine");
  let cityNameDisplay = document.querySelector("h2#currentLocation");
  cityNameDisplay.innerHTML = `${cityName.value}`;
  searchCity(cityName.value);
}
let citySearchEngine = document.querySelector("form#searchCity");
citySearchEngine.addEventListener("submit", showCityName);

function showCurrentCityTemp(response) {
  let currentTempDisplay = document.querySelector("h1#currentTempDisplay");
  let temperature = Math.round(response.data.main.temp);
  currentTempDisplay.innerHTML = `${temperature}°`;
}

function searchCity(city) {
  let apiKey = "aca4dd3643b89e94dbd3cac6cf6f2638";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentCityTemp);
}
