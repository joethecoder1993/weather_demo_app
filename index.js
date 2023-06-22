//stay away from my api key >:(

const weatherData = async (city) => {
    const request = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey)
        .then((request) => request.json())
        .then((response) => {
            document.querySelector('#city').innerHTML = "Weather in " + city
            document.querySelector('#temperature').innerHTML = response.main.temp + " °F"
            document.querySelector('#icon').src = "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png"
            document.querySelector('#sky').innerHTML = response.weather[0].description
            document.querySelector('#humidity').innerHTML = "Humidity: " + response.main.humidity + "%"
            document.querySelector('#wind-speed').innerHTML = "Wind Speed: " + response.wind.speed + " mph"

        })
        .then((data) => {return data})
    //const response = request.json()
    //console.log(response)
}

document.addEventListener('click', (e) => {
    if(e.target.id === "button") {
        //console.log(document.getElementById('input-text').value)
        console.log(document.getElementById('input-text').value)
        var url = 'https://source.unsplash.com/1600x900/?' + document.getElementById('input-text').value
        document.querySelector('.showcase').style.backgroundImage = "url(" + url + ")"
        weatherData(document.getElementById('input-text').value)
    }
})

document.querySelector('.search-bar').addEventListener('keyup', e => {
    if(e.key === "Enter") {
        //console.log(document.getElementById('input-text').value)
        console.log(document.getElementById('input-text').value)
        var url = 'https://source.unsplash.com/1600x900/?' + document.getElementById('input-text').value
        document.querySelector('.showcase').style.backgroundImage = "url(" + url + ")"
        weatherData(document.getElementById('input-text').value)
    }
})