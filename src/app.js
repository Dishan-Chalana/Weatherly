const path = require('path');
const weather = require('./utils/weather');
const geographic = require('./utils/geographic');
const express = require('express');
const hbs = require('hbs');

const app = express();

// weather()
//     .then((data)=>{
//         console.log(data);
//     })

//     .catch((error)=>{
//         console.log(error);
//     })
const templatePath = path.join(__dirname, '../templates');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);



const publicPath = path.join(__dirname, '../public');
//console.log(publicPath);
app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.render('index');
});


app.get("/weather", (req, res) => {
    if (!req.query.address) {
        res.send({ error: "please provide a address" })
    }
    else {

        geographic(req.query.address)
            .then((data) => {
                return weather(data.lat, data.lon)

            })
            .then((data) => {
                res.send(data)

            })
            .catch((error) => {
                res.send(error)
            })

    }

});

app.get('/main', (req, res) => {
    res.render('main')
});

app.get('/help', (req, res) => {
    res.render('help')
});

app.get("*", (req, res) => {
    res.render('404')

});


app.listen(3000, () => { console.log('Server is up and running on port 3000') });



