"use strict";
let searchbox = document.querySelector(".search");
let button = document.querySelector(".btn");
let cityname = document.querySelector(".cityname");
let imgg = document.querySelector("img");
let weath_info = document.querySelector(".text");
let heat = document.querySelector(".heatwave");
let humidity_temperature = document.querySelector(".humidity_temperature");
let wind_degreee = document.querySelector(".wind_degree");
let wind_kphh = document.querySelector(".wind_kph");
let temp_cc = document.querySelector(".temp_c");
let temp_ff = document.querySelector(".temp_f");
let city = "karachi";

async function weatherfetc(city) {
  let url = `https://api.weatherapi.com/v1/current.json?key=ea38e5e435ff426bbd260806233008&q=${city}&aqi=no`;
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let {
      humidity,
      temp_c,
      temp_f,
      wind_degree,
      wind_kph,
      heatindex_c,
      condition: { text, icon },
    } = data.current;
    let { name } = data.location;

    displayfetchdata(
      humidity,
      temp_c,
      temp_f,
      wind_degree,
      wind_kph,
      text,
      icon,
      name,
      heatindex_c
    );
  } catch (error) {
    throw new Error("Failed to fetch", error);
  }
}
weatherfetc(city);
button.addEventListener("click", () => {
  let value = searchbox.value;
  weatherfetc(value);
  searchbox.value = "";
});
function displayfetchdata(
  humidity_tempp,
  temppp_c,
  tempp_f,
  windd_degree,
  winddd_kph,
  weatherinform,
  icon,
  citynam,
  heatindexx_c
) {
  imgg.src = icon;
  cityname.innerHTML = citynam;
  weath_info.textContent = `${weatherinform} `;
  heat.textContent = `${heatindexx_c} °C`;
  humidity_temperature.textContent = `${humidity_tempp} % `;
  wind_degreee.innerHTML = `${windd_degree} °C`;
  wind_kphh.textContent = `${winddd_kph}k/h`;
  temp_cc.innerHTML = `${temppp_c}°C `;
  temp_ff.innerHTML = `${tempp_f} &#x2109;`;
}
