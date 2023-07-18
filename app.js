const express = require("express");
const app = express();
const https = require("https");
app.listen(3000, function () {
    console.log("started");
})
app.get("/", function (req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=50fc4f26121627ba93652a34ac9f943d&units=metric"
    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDesc = weatherData.weather[0].description;
            console.log(weatherDesc);

        })
    })
    res.send("hello");

})