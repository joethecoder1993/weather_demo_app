const apiKey = "14559afa09f5cf35f65e4498881d3f15"

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