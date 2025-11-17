// ============================
// FUNCTION: Fetch Weather Data
// ============================
async function getWeather() {

  // Get city name from input box
  const city = document.getElementById("cityInput").value;

  // Your OpenWeatherMap API key
  const apiKey = "d0fbeb9c5732354495dea09f970e95cf";

  // API URL with city, key, and units (°C)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {

    // Fetch data from API
    const response = await fetch(url);

    // If city name is wrong / API fails
    if (!response.ok) throw new Error("City not found");

    // Convert response to JSON
    const data = await response.json();

    // Prepare weather info to show in UI
    const weatherData = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    `;

    // Display weather details on screen
    document.getElementById("weatherResult").innerHTML = weatherData;

  } catch (error) {

    // Show error message (e.g., wrong city entered)
    document.getElementById("weatherResult").innerHTML =
      `<p style="color:red;">${error.message}</p>`;
  }
}
