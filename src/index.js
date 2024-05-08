function refreshWeather(response){
  let temperatureElement = document.querySelector(`#current-temperature`);
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector(`#current-city`);

  temperatureElement.innerHTML = Math.round(temperature);
  cityElement.innerHTML = response.data.city;
}

function searchCity(city){
let apiKey = `01dd2bca25c0t00b3d253f443e0of791`;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event){
  event.preventDefault();
  let searchInput = document.querySelector(`#search-entry`);
  let cityElement = document.querySelector(`#current-city`);
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

  let searchFormElement = document.querySelector(`#search-form`);
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Boston");