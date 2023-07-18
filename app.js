const express = require("express");
const app = express();
const https = require("https");
app.listen(3000, function () {
    console.log("started");
})
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})
app.post("/", function () {
    console.log("recievd")
})
// const query = "Virar";
//     const appKey = "50fc4f26121627ba93652a34ac9f943d";
//     const units = "metric";
//     const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + appKey + "&units=" + units;
//     https.get(url, function (response) {
//         console.log(response.statusCode);

//         response.on("data", function (data) {
//             const weatherData = JSON.parse(data);
//             const temp = weatherData.main.temp;
//             const weatherDesc = weatherData.weather[0].description;
//             const icon = weatherData.weather[0].icon
//             const imageUrl = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
//             console.log(weatherDesc);
//             res.write("<p>the weather is "+weatherDesc+"</p>")
//             res.write("<h1>the temperature in mumbai is " + temp + " degree celsius</h1>");
//             res.write("<img src = " + imageUrl + ">");
//             res.send();

//         })
//     })