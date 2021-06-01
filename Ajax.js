function getWeather() {
    const api_key = "143454aa39bbe3442a890cdbf3f9db36";
    let city = document.getElementById('city').value;
    let tempra = document.getElementById('temp');
    let feel = document.getElementById('feel');
    let speed = document.getElementById('speed');
    let deg = document.getElementById('deg');
    let lon = document.getElementById('lon');
    let lat = document.getElementById('lat');


    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`, true)
    
    xhr.onload = function () {
       if(this.status === 200){
           var json = JSON.parse(this.responseText);
           var main = json.main;
           var wind = json.wind;
           var coord = json.coord;
           console.log(main.temp);
           tempra.innerHTML = "Temprature: " + parseInt(main.temp-273.15) + "<sup>*C</sup>";
           feel.innerHTML = "Feels Like: " + parseInt(main.feels_like-273.15) + "<sup>*C</sup>";
           humid.innerHTML = "Humidity: " + parseInt(main.humidity);

           speed.innerHTML = "Speed: " + parseInt(wind.speed);
           deg.innerHTML = "Deg: " + parseInt(wind.deg);    

           lon.innerHTML = "Lon: " + parseInt(coord.lon);
           lat.innerHTML = "Lat: " + parseInt(coord.lat);
       }
       else{
           console.log("Some error occured")
       }
    }
    xhr.send()
}