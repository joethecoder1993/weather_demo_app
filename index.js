//stay away from my api key. No touchie >:(

const weatherData = async (city) => {
    const request = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey)
        .then((request) => request.json())
        .then((response) => {
            console.log("Temperature: " + response.main.temp)
            console.log("Pressure: " + response.main.pressure)
            console.log("Humidity: " + response.main.humidity)
        })
        .then((data) => {return data})
    //const response = request.json()
    //console.log(response)
}

function funcCall(c) {
    weatherData(c)
}