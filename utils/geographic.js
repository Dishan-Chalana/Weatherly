const axios = require('axios');

//to get the latitude and longitude of the location
const getGeo = (location) => {
    return new Promise((resolve, reject) => {
        const url = 'http://api.openweathermap.org/geo/1.0/direct?q=' + location + '&limit=5&appid=420c73198b0a8529e5eecc17687ec115';
        axios.get(url)
            .then(function (response) {
                // handle success

                resolve({
                    lat: response.data[0].lat,
                    lon: response.data[0].lon
                });
                //console.log(response.data.weather[0].description);
            })
            .catch(function (error) {
                reject({ error: 'Failed to find location' });
            });
    });
}

module.exports = getGeo