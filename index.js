const apiKey = "317f0319e72cbad4484c719333cfb58b"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="



const searchCity = document.querySelector(".mySearch input");
const searchButton = document.querySelector(".mySearch button");
const weatherIcon = document.querySelector(".weatherIcon");
const errorMsg = document.querySelector(".error");
const weather= document.querySelector(".weather");
async function checkWeather(city){
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`)
    var data = await response.json();
   
if (response.status == 404){
   errorMsg.style.display ="block";
weather.style.display="none";

}
else{
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"kmph";
 
  const weatherImg = data.weather[0].main;
 weatherIcon.src = "images/"+`${weatherImg}`+".png";

errorMsg.style.display="none";
weather.style.display="block";
}
}

   
searchButton.addEventListener("click",()=>{

    checkWeather(searchCity.value);
})