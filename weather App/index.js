console.log("hello jii");
const API_key = "336997a062b4417baba55fa81185f136";
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

async function showWeather() {
  try {
    //let latitude =
    //let longitute=;
    let city = "indore";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
    );

    const data = await response.json();
    console.log("Weather data->", data);

    //   let newPara = document.createElement('p');
    //   newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;

    //   document.body.appendChild(newPara);
    renderWeatherInfo(data);
  } catch (err) {
    //handle the error here
  }
}

async function getCustomeWeatherDetails() {
   try {
    let latitude =22.719568;
    let longitude=75.857727;

    let result = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}&units=metric`);
    let data = await result.json();
    console.log(data);
   } catch (error) {
    console.log("error received"+error);
   }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("no geolocation support");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let longi= position.coords.longitude;

    console.log(lat);
    console.log(longi);
}