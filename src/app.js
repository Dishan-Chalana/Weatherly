const path = require('path');
const weather = require('./utils/weather');
const geographic = require('./utils/geographic');
const express = require('express');

const app = express();

// weather()
//     .then((data)=>{
//         console.log(data);
//     })

//     .catch((error)=>{
//         console.log(error);
//     })

const publicPath = path.join(__dirname, '../public');
console.log(publicPath);

app.use(express.static(publicPath));

// app.get("/", (req, res) => {
//     res.send("<h1> welcome </h1>");
// });

app.get("/weather", (req, res) => {
    if (!req.query.location) {
        res.send({error:"please provide a location"});
    }

    geographic(req.query.location)
        .then((data) => {
            return weather(data.lat, data.lon);

        })
        .then((data) => {
            res.send(data);

        })
        .catch((error) => {
            res.send(error)
        })


});

app.get("*", (req, res) => {
    res.send("404 page not found");

});


app.listen(3000, () => {console.log('Server is up and running on port 3000')});



