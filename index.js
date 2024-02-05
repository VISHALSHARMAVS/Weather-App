const apiKey = "317f0319e72cbad4484c719333cfb58b"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="



const searchCity = document.querySelector(".mySearch input");
const searchButton = document.querySelector(".mySearch button");
const weatherIcon = document.querySelector(".weatherIcon");


async function checkWeather(city){
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`)
    var data = await response.json();
   


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"kmph";
 
  const weatherImg = data.weather[0].main;
 weatherIcon.src = "images/"+`${weatherImg}`+".png";


document.querySelector(".weather").style.display="block";
}
searchButton.addEventListener("click",()=>{

    checkWeather(searchCity.value);
})