const URL = "http://api.openweathermap.org/data/2.5/weather?q=";
const KEY = "142774961802d3eabc9decc1c8e0cf4a";
const idPart = "&appid=";
let theWeather;

const getWeather = async (city) => {
  await fetch(`${URL}${city}${idPart}${KEY}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("weatherInformation", data);
    })
    .catch((error) => console.log(error));
};

const submitCity = document.getElementById("submit-city");
submitCity.addEventListener("click", () => {
  let city = document.getElementById("city-name").value;
  getWeather(city);
});

const myWeather = localStorage.getItem("weatherInformation");
console.log("From localStorage", myWeather);
