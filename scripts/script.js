//ЗАПРОС НА ПРОГНОЗ

function getWeather() {
    const apiKey = 'mykey';
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');

    const cityName = cityInput.value.trim();

    if (cityName !== '') {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.main && data.main.temp && data.weather && data.weather[0] && data.weather[0].description) {
                    const temperature = Math.round(data.main.temp);
                    const description = data.weather[0].description;
                    const city = data.name;

                    const weatherText = `
                        <p class="temperature">Temperature in ${city}: ${temperature}°C</p>
                        <p class="description">${description}.</p>
                    `;
                    weatherInfo.innerHTML = weatherText;
                } else {
                    console.error('Error fetching weather data: Unexpected response format');
                    weatherInfo.textContent = 'Error fetching weather data. Please try again.';
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                weatherInfo.textContent = 'Error fetching weather data. Please try again.';
            });
    } else {
        weatherInfo.textContent = 'Please enter a city name.';
    }
}

//FUNCTION COLOR

function changeColors() {
    const gradientBackground = document.getElementById('gradientBackground');
    const colors = [
        'rgb(76, 142, 255)',
        'rgb(255, 136, 255)',
        'rgb(94, 255, 20)',
    ];

    let currentIndex = 0;

    if (gradientBackground) {
        gradientBackground.style.background = `linear-gradient(45deg, ${colors[currentIndex]}, ${colors[(currentIndex + 1) % colors.length]}, ${colors[(currentIndex + 2) % colors.length]})`;
    } else {
        console.error('Element with id "gradientBackground" not found.');
    }
}


changeColors();
