const apikey = "96af31bb7ae9f9d03696176715b02f9b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".my-ser");
const searchbtn = document.querySelector(".ser");
const icons = document.querySelector(".whether-icon") 

async function checkWhether(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".deg").innerHTML = Math.round(data.main.temp) + "°c";
document.querySelector(".my-txt").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

  if(data.weather[0].main == "Clouds") {
        icons.src = "./images/cloudy.png";
  } else if(data.weather[0].main == "cloud") {
    icons.src = "./images/cloud.png";
  } else if(data.weather[0].main == "rain") {
    icons.src = "./images/rain.png";
  }
}

searchbtn.addEventListener("click", () => {
    checkWhether(searchbox.value);
})


