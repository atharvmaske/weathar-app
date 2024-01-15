const apikey = "52ec88c49c14d758b86351b0a52f007d";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector("#cityInput");
const button =document.querySelector("#search");
const image = document.querySelector(".weatherImage");
async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".info-container").style.display = "none";
    }
    else{
        var data = await response.json();   
        document.querySelector("#cityName").innerHTML = data.name;
        document.querySelector("#temperature").innerHTML = data.main.temp + "°C";
        document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
        document.querySelector("#windSpeed").innerHTML = data.wind.speed + "km/h";
            if(data.weather[0].main == "Clouds"){
            image.src = "img/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            image.src = "img/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            image.src = "img/rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            image.src = "img/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            image.src = "img/mist.png";
        }
        document.querySelector(".info-container").style.display = "block";
        document.querySelector(".error").style.display = "none";
        search.value = "";
    }
    
}

button.addEventListener("click",()=>{
    checkweather(search.value);
})
search.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkweather(search.value);
    }
});