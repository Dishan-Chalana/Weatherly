const weather = require('./utils/weather');
const geographic = require('./utils/geographic');

// weather()
//     .then((data)=>{
//         console.log(data);
//     })

//     .catch((error)=>{
//         console.log(error);
//     })

geographic('Pitipana north')
    .then((data) => {
        return weather(data.lat, data.lon);
    })
    .then((data) => {
        console.log(data);

    })
    .catch((error) => {
        console.log(error)
    })