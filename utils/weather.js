const axios = require('axios');

//to get the weather of the location
const getWeather = (lat, lon) => {
    return new Promise((resolve, reject) => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=420c73198b0a8529e5eecc17687ec115';

        axios.get(url)
            .then(function (response) {
                // handle success
                resolve({ weather: 'Status ' + response.data.weather[0].description });
                //console.log(response.data.weather[0].description);
            })
            .catch(function (error) {
                reject({ error: 'Error' });
            });
    });


}

module.exports = getWeather

