const API_KEY = "9f2511d751cefd625a3451aae8f1fa67";

function onGeoSuccess(position) {
    const latiTude = position.coords.latitude;
    const longiTude = position.coords.longitude;
    console.log("You live in" , latiTude , longiTude);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latiTude}&lon=${longiTude}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    });
}

function onGeoError() {
    alert("can't find you. No weather for you.");
}




navigator.geolocation.getCurrentPosition(onGeoSuccess , onGeoError );


