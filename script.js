const apiKey = "bfc3755206f2b9ad302eb71230b129e6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
  
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
    }

  var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML = data.main.temp + "°c";
  document.querySelector(".humidity-level").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";
    

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = './src/clouds.png'
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = './src/clear.png'
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = './src/rain.png'
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = './src/drizzle.png'
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = './src/mist.png'
    }

    document.querySelector('.weather').style.display = 'block'
    document.querySelector('.wind').style.display = 'block'
    document.querySelector('.humidity').style.display = 'block'
    document.querySelector('.error').style.display = 'none'

};

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
