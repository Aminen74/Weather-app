



const apiUrlGeo = `https://api.openweathermap.org/geo/1.0/direct?units=metric&q=`
const apiUrlWeather="https://api.openweathermap.org/data/2.5/weather"
const apiKey = "aa5701033de2caf7baaded371be7eb7f"
const checkBox = document.querySelector(".checkBox")
const btn = document.querySelector(".btn")
const weatherImg = document.querySelector(".weather-icon")
async function checkWeather(City) {
    const response = await fetch(apiUrlGeo + City +`&appid=${apiKey}`);
    var Geocoding =  await response.json()
    console.log(Geocoding);
    
    var Latitude= Geocoding[0].lat
    var Longitude=Geocoding[0].lon
    async function weather() {
    var CurrentWeather = await fetch (apiUrlWeather+`?lat=${Latitude}` + `&lon=${Longitude}` +`&appid=${apiKey}`+"&units=metric")

    var weatherData = await CurrentWeather.json()
 
    document.querySelector(".temp").innerHTML=Math.round(weatherData.main.temp)+ " °C"
    document.querySelector(".realFeel").innerHTML=Math.round(weatherData.main.feels_like)+ " °C"
    document.querySelector(".City").innerHTML=weatherData.name
    document.querySelector(".humidity").innerHTML=weatherData.main.humidity +" %"
    document.querySelector(".wind").innerHTML=weatherData.wind.speed + " Km/h"
    
    if(weatherData.weather[0].main=="Clouds"){
    weatherImg.src = "./images/clouds.png"
    }
    else if(weatherData.weather[0].main=="Clear"){
        weatherImg.src = "./images/clear.png"
    }
    else if(weatherData.weather[0].main=="Drizzle"){
        weatherImg.src = "./images/drizzle.png"
    }
    else if(weatherData.weather[0].main=="Snow"){
        weatherImg.src = "./images/snow.png"
    }
    else if(weatherData.weather[0].main=="Rain"){
        weatherImg.src = "./images/rain.png"
    }
    else if(weatherData.weather[0].main=="Mist"){
        weatherImg.src = "./images/mist.png"
    }

    }
    weather()
}

btn.addEventListener("click",()=>{
    checkWeather(checkBox.value)
    document.querySelector(".autoCom").style.display = "none"
})
function autoComplete(){
    if(checkBox.value === ""){
        document.querySelector(".autoCom").style.display = "none"
}
else{document.querySelector(".autoCom").style.display = "block"
}
}
document.body.addEventListener("click",()=>{document.querySelector(".autoCom").style.display = "none"})
document.querySelector(".checkBox").addEventListener("keyup",autoComplete)


const iranCities = [
    "Tehran", "Mashhad", "Isfahan", "Tabriz", "Shiraz", "Ahvaz", "Qom", "Kermanshah", "Urmia", "Rasht",
    "Zahedan", "Hamadan", "Kerman", "Yazd", "Ardabil", "Bandar Abbas", "Ilam", "Arak", "Birjand", "Bojnurd",
    "Semnan", "Sanandaj", "Borujerd", "Khorramabad", "Sari", "Gorgan", "Shahr-e Kord", "Qazvin", "Zanjan", "Abadan",
    "Esfahan", "Shiraz", "Kashan", "Yazd", "Kerman", "Kermanshah", "Hamedan", "Ardabil", "Bandar Abbas", "Mashhad"
  ];
  

  const cityInput =document.querySelector(".checkBox")
  const cityList=document.querySelector(".autoCom")

  cityInput.addEventListener("keyup",handleInput)
  function handleInput(){
  
  const inpulValue =cityInput.value.trim().toLowerCase()
  
  
  const suggCity=iranCities.filter(x=>x.toLowerCase().startsWith(inpulValue))
  console.log(suggCity)
  document.querySelector(".autoCom").innerHTML =  Object.values(suggCity).join("\n")
 
  
  }

  
