// (fUarra&3EFGW5_.)----->password for open weather map
const accessKey = "2c1dddf4ed475b7b3f65d48afc2ea922";

const cityName = document.getElementById("cityName");
const searchButton = document.getElementById("searchButton");
const weatherIcon = document.querySelector(".weatherIcon");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

async function getWeather() {
  try {
    let apikey = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${accessKey}&units=metric`;
    const response = await fetch(apikey);
    const data = await response.json();
    weatherIcon.src = data.weather[0].main + ".png";
    temp.innerHTML = data.main.temp + "°C";
    city.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/hr";
    document.querySelector(".weather").style.display = "block";
  } catch (error) {
    alert('City name does not exist in our database');
  }
}

searchButton.addEventListener("click", (e) => {
  if (cityName.value === "") {
    alert("Enter valid city name to check weather");
  } else {
    getWeather();
  }
});
