const key = "56d44b8655d0331b96b723b82df514f0";

let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

let getWeather = () =>{
  let cityValue = cityRef.value;
  // cityRef.value = " ";
  console.log(cityRef.value);
  if(cityValue == null){
    result.innerHTML = `<h3 class="msg">Please Enter a City Namw</h3>`;
  }
  else{
    fetchData(cityValue);
  }
}

async function fetchData(cityValue){
  // console.log(url);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
  let resp = await fetch(url);
  let data = await resp.json();
  putData(data);
}

function putData(data){
  console.log(data);
  console.log(data.name);
  result.innerHTML= 
  `<h2>${data.name}</h2>
  <p>${data.weather[0].main}</p>
  <p>${data.weather[0].description}</p>
  <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png ">
  <h1>${data.main.temp} &#176 </h1>
  <div class="temp-container">
    <div class="maxtemp">
      <p>Max</p>
      <p>${data.main.temp_max}</p>
    </div>
    <div class="mintemp">
    <p>Min</p>
    <p>${data.main.temp_min}</p>
    </div>
  </div>`
}


searchBtn.addEventListener("click",getWeather);
window.addEventListener('load',getWeather);



