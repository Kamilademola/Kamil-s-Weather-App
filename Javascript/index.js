const apiKey = "b82446c26e694ff3d3276c5c0640fd33";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search-bar input");
const searchSpn = document.querySelector(".search-bar span");
const weatherIcon = document.querySelector("#weather-icon");
const searchInput = document.querySelector("#search-input");
const clearButton = document.querySelector("#clear-icon");
const searchButton = document.querySelector("#search-icon");


// Function to check the weather for a given city
async function checkWeather(city) {
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

// Handle invalid city name
if(response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector("article").style.display = "none";

} else {
    var data = await response.json();
    console.log(data);

      // Update city, temperature, humidity, and wind speed
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; ;
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    
        // Update weather icon based on weather condition
        if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "../Assets/Icons/clouds.png";
    }
        else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "../Assets/Icons/sun.png";
    }
        else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "../Assets/Icons/rain.png";
    }
        else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "../Assets/Icons/drizzle.png";
    }
        else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "../Assets/Icons/mist.png";
    }
        else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "../Assets/Icons/snow.png";
    }

    // Show weather information and hide error message
    document.querySelector("article").style.display = "block";
    document.querySelector(".error").style.display = "none";

}
// Show clear button when there's text in the input field
searchInput.addEventListener("input", () => {
    if (searchInput.value) {
        clearButton.style.display = "inline"; // Show the clear button
    } else {
        clearButton.style.display = "none"; // Hide the clear button if the input is empty
    }
});

// Clear the input when the clear button is clicked
clearButton.addEventListener("click", () => {
    searchInput.value = ""; // Clear the input field
    clearButton.style.display = "none"; // Hide the clear button
    searchInput.focus(); // Return focus to the input field
});

} 
    // Show weather information and hide error message
    searchSpn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})



// Trigger search when the search icon is clicked
searchButton.addEventListener("click", () => {
    checkWeather(searchInput.value);
});








