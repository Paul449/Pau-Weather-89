let APIkey;
//variables for storing data from Weather API;
//constructing the weather query to make the API call
//web API variables to select HTML elements and add interactivity
let InputText = document.getElementById('any-location'); // targeting the input box where we enter our city name
let searchBtn = document.getElementById('submitBtn'); // targeting the button for searching cities
let searchHistory = document.getElementById('first-city'); //targets the search history after selecting a city (HTML Element)
let cityName = document.getElementById('City-Name'); //targets the HTML element where is the city name located on the current city info container (HTML Element)
let cityTemp = document.getElementById('temp'); //targets the HTML element where is the temperature located on the current city info container (HTML Element)
let cityWind = document.getElementById('Wind'); //targets the HTML element where is the wind speed located on the current city info container (HTML Element)
let cityHumidity = document.getElementById('Humidity'); //targets the HTML element where is the humidity located on the current city info container (HTML Element)
let fiveDayForecast = document.getElementsByClassName('Five-Day-Forecast-section'); //targets the html element where will be displayed the future conditions
/*fetch request to openWeatherAPI */
let present = function (city){ // this function will perform a request to the openWeatherAPI and get a response back
   let requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`; //API link to especifically select cities info using my API key
   fetch(requestURL).then(function(answer){ //sending the actual request to API to get information about cities before choosing how to get the response back
   return answer.json();
   }).then(data => {console.log(data) 
      cityName.textContent = data.name; //
      cityTemp.textContent = data.main.temp;
      cityWind.textContent = data.wind.speed;
      cityHumidity.textContent = data.main.humidity;
      localStorage.setItem('enter', city);
      var enter = localStorage.getItem('enter');
   })   
};
present('San Francisco');
searchBtn.addEventListener('click', present);

/*let future = function(lon,lat){
   var futureURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIkey}`;
   fetch(futureURL).then(answer =>{answer.json()})
   .then(data => {console.log(data)})
}
var callFuture = future(-97.7431, 30.2672);*/

let storeCity = function(){
  let value = InputText.value;
  searchHistory.textContent = InputText.value;
  localStorage.setItem('history', value);
}
let history = localStorage.getItem('history');
searchBtn.addEventListener('click', storeCity, true);

