let APIkey = 'd1c6aef6b187c5b413327fb226fc646f';
let city; // variable to store any city
let searchbox = document.querySelector('.future-conditions'); // display five days forecast
let InputBox = document.getElementById('input-txt'); // enter city
let fetchBtn = document.getElementById('searchBtn'); // click button

function getCity () {
    const startPerformance = performance.now(); // start timing the API request
  //present conditions
    searchbox.innerHTML = ""; // it updates data when looking for multiple cities instead of appending the conditions
    const requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`; // requesting city on the openWeather api by using my API key
    fetch(requestURL) // requesting data from api for any city (present values)
    .then(response => response.json()) // specifying the response in JSON
    .then(data =>{ // data displayed json format
          document.querySelector('#City').innerHTML = data.name; // targeting the city name
          document.querySelector('#Temp').innerHTML = data.main.temp; // targeting the current temperature
          document.querySelector('#Wind').innerHTML = data.wind.speed; // targeting the current wind speed
          document.querySelector('#Humid').innerHTML = data.main.humidity; // targeting the current humidity
    }).catch(err =>{
      console.error('error:',err)
    })
// future conditions
const futureURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}`;
    fetch(futureURL) // requesting data
    .then(response=> response.json()) // specifying how I am going to receive the response
    .then(data => { // printing data
      const fiveDays = []; // storing future forecast
      for(let i = 0; i < data.list.length; i++){
        const date = new Date(data.list[i].dt_txt);
        const day = date.getDate();
        if(!fiveDays.includes(day)){
          let box = document.createElement('div'); // future forecast container
          box.setAttribute('style','border: 2px solid blue; background-color:#1E90FF; color:white; margin-right:10px; padding:20px');
          box.classList.add('flex-container');
          let FD = document.createElement('h1');
          let FT = document.createElement('p');
          let FW = document.createElement('p');
          let FH = document.createElement('p');
          box.appendChild(FD);
          box.appendChild(FT);
          box.appendChild(FW);
          box.appendChild(FH);
          searchbox.appendChild(box);
          FD.textContent = data.list[i].dt_txt;
          FT.textContent = 'Temp: ' + data.list[i].main.temp +' °F' ;
          FW.textContent="Wind: " + data.list[i].wind.speed + ' mph';
          FH.textContent="Humidity: " + data.list[i].main.humidity + ' %';
          fiveDays.push(day);
        }
        if(fiveDays.length >=5){
          break; // stop after passing 5 days
        }
      }
}).catch(err => {
  console.error('error',err);
})
    const endPerformance = performance.now();
    const Optimization = endPerformance - startPerformance; // calculate the total time for API requests
    console.log(`API response time: ${Optimization.toFixed(2)} ms`); // log the API response time
};
fetchBtn.addEventListener('click', (event) =>{
    let list = document.querySelector('.city-list');
    let Paragraph = document.createElement('button');
    Paragraph.setAttribute('style','border:3px solid grey;border-radius:5px; position: relative; left: 10px; background-color: grey; padding-right: 90px;margin-bottom:10px; color:white;')
    list.append(Paragraph);
    event.preventDefault(); // prevent losing data after refreshing website
    city = InputBox.value.trim();
    localStorage.setItem('enter',city);
    console.log(localStorage.getItem('enter'));
    Paragraph.innerHTML = city;
    Paragraph.addEventListener('click', getCity);
    getCity(city);
     });
   
    /* let box = document.createElement('div'); // future forecast container
    box.setAttribute('style','border: 2px solid blue; background-color:#1E90FF; color:white; margin-right:10px; padding:20px');
    box.classList.add('flex-container');
    let FD = document.createElement('h1');
    let FT = document.createElement('p');
    let FW = document.createElement('p');
    let FH = document.createElement('p');
    box.appendChild(FD);
    box.appendChild(FT);
    box.appendChild(FW);
    box.appendChild(FH);
    searchbox.appendChild(box);
    FD.textContent = element.dt_txt;
    FT.textContent = 'Temp: ' + element.main.temp +' °F' ;
    FW.textContent="Wind: " + element.wind.speed + ' mph';
    FH.textContent="Humidity: " + element.main.humidity + ' %';*/