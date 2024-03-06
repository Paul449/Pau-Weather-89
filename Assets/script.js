let APIkey = 'd1c6aef6b187c5b413327fb226fc646f';
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
let currentDate = new Date();
let present = function (city){ // this function will perform a request to the openWeatherAPI and get a response back
   let requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`; //API link to especifically select cities info using my API key
   fetch(requestURL).then(function(answer){ //sending the actual request to API to get information about cities before choosing how to get the response back
   return answer.json();
   }).then(data => {console.log(data) 
      cityName.textContent = data.name; // targeting city name from the json
      cityTemp.textContent = data.main.temp; // targeting current temperature
      cityWind.textContent = data.wind.speed; // targeting current wind speed
      cityHumidity.textContent = data.main.humidity; // targeting current humidity
      localStorage.setItem('enter', city); // saving city name on the local storage
      var enter = localStorage.getItem('enter'); // get item from local storage
      let lon;
      let lat;
      //fetch().then()
   })
};
searchBtn.addEventListener('click', function(e){
   e.preventDefault();
   var inputCity = InputText.value.trim();
   present(inputCity);
}); 

let future = function(lon,lat){ // five forecast weather
   var futureURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`;
   fetch(futureURL).then(answer =>{
      return answer.json();
})
   .then(data => {console.log(data)
   
      let T2 = document.getElementById('T2'); //
      let W2 = document.getElementById('W2');
      let H2 = document.getElementById('H2');
      let T3 = document.getElementById('T3');
      let W3 = document.getElementById('W3');
      let H3 = document.getElementById('H3');
      let T4 = document.getElementById('T4');
      let W4 = document.getElementById('W4');
      let H4 = document.getElementById('H4');
      let T5 = document.getElementById('T5');
      let W5 = document.getElementById('W5');
      let H5 = document.getElementById('H5'); 
   })
}
future()
let storeCity = function(){
  let value = InputText.value;
  searchHistory.textContent = value;
  localStorage.setItem('history', value);
  let history = localStorage.getItem('history');
}
searchBtn.addEventListener('click', storeCity);

