function getWeather() {
  let location = document.getElementById("location");
  let temperature = document.getElementById("temp");
  let wind = document.getElementById("wind");
  let humidity = document.getElementById("humidity");
    
  let api = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "f146799a557e8ab658304c1b30cc3cfd";
  
  location.innerHTML = "Loading...";
  
  navigator.geolocation.getCurrentPosition(success, error);
  
  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  
    let url =
      api +
      "?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=" +
      apiKey +
      "&units=imperial";
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        location.innerHTML = data.name;
        let temp = data.main.temp;
        temperature.innerHTML = temp + "° F";
        let windSpeed = data.wind.speed;
        wind.innerHTML = windSpeed + " MPH";
        let rh = data.main.humidity;
        humidity.innerHTML = rh + "%";

      });
  }
  
  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }
};
  
getWeather();

$(document).ready(function() {
  $("#searchBtn").click(function() {
    var searchHistory = $("input[name=cityName]").val();
    $("ul").append("<li>"+ searchHistory + "</li>");
  });
});


  