const inputBox = document.querySelector('#inputbox');
const searchBtn = document.getElementById('searchButton');
const weather_img = document.querySelector('#weatherImage');
const temperature = document.querySelector('.temp');
const description = document.querySelector('#descript');
const humidity = document.getElementById('humi');
const wind_speed = document.getElementById('wind-speed');
const pagenotfound=document.getElementById("pagenotfound");
const weather_body=document.getElementById('weather-body');


async function checkWeather(city){
    const api_key = "f136ad0f3f0e4c2d3ec57dd6719c3458";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data)

    if(weather_data.cod===`404`){
        pagenotfound.style.display='flex';
        weather_body.style.display="none";
        console.log("error")
        return;
    }

  

    pagenotfound.style.display="none";
    weather_body.style.display="flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src='cloud.png';
            break;
            case 'Clear':
                weather_img.src='clear.png';
                break;
                case 'Rain':
                    weather_img.src='rain.png';
                    break;
                    case 'Mist':
                        weather_img.src='mist.png';
                        break;
                        case 'Snow':
                            weather_img.src='cloudy-37012_1280.webp.png';

    }
}   



inputBox.addEventListener("keyup",(e)=>{
        
    if(e.keyCode === 13 ){
        console.log("Enter is pressed");
        searchBtn.click();
    }
})

searchBtn.addEventListener("click",()=>{
    console.log("button is clicked");
    checkWeather(inputBox.value);
})