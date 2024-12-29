const apiKey = "238081ebede89cd7fbda1c3ed83f378e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector(".weather-icon");
const searchBox = document.getElementById("search-inp")
const searchBtn = document.getElementById("search-btn")
const bodyClr = document.querySelector("body")
const des = document.getElementById("description")
const atmosphere = ["Mist","Smoke","Haze","Sand" ,"Fog","Sand","Dust","Volcanic ash","Squalls","Tornado"]
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {

        var data = await response.json();
        const temp = data.weather[0].description


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "clouds.png";
            bodyClr.style.background = "linear-gradient(to right,rgb(134, 176, 231), #778899)";
            des.innerText = temp

        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.png";
            bodyClr.style.background = " linear-gradient(to right, #ffcc00, #66ccff)";
            des.innerText = temp

        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "rain.png";
            bodyClr.style.background = "linear-gradient(to right, #394A59, #607D8B)";
            des.innerText = temp
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "drizzle.png";
            bodyClr.style.background = "linear-gradient(to right, #6A798A, #8BA9C1)";
            des.innerText = temp

        }
        else if (data.weather[0].main == "Thunderstorm") {
            weatherIcon.src = "storm-thunder-svgrepo-com (1).svg";
            bodyClr.style.background = "linear-gradient(to right, #2c3e50, #4ca1af)";
            des.innerText = temp

        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "snow-showers-svgrepo-com.svg";
            bodyClr.style.background = "linear-gradient(to right, #00c6ff, #0072ff)";
            des.innerText = temp

        }
        else if (atmosphere.includes(data.weather[0].main)) {
            weatherIcon.src = "mist.png";
            bodyClr.style.background = "linear-gradient(to right, #9E9E9E, #D1D5DB)";
            des.innerText = temp
    
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}
searchBtn.addEventListener("click", () => {

    checkWeather(searchBox.value);
});

