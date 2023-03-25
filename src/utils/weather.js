const axios = require('axios');

//to get the weather of the location

const getWeather = (lat, lon) => {
    return new Promise((resolve, reject) => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=420c73198b0a8529e5eecc17687ec115&units=metric';

        axios.get(url)
            .then(function (response) {
                // handle success
                resolve({
                    location: response.data.name,
                    weather: response.data.weather[0].description,
                    temp: response.data.main.temp,
                    humidity: response.data.main.humidity,
                    temp_min: response.data.main.temp_min,
                    temp_max: response.data.main.temp_max,
                    
                    
                });
               //console.log(response.data);
            })
            .catch(function (error) {
                //handle error
                reject({ error: 'Error' });
            });
    });


}


module.exports = getWeather

