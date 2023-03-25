const wForm = document.querySelector('form')
const search = document.querySelector('#search')
const loc = document.querySelector('#loc')
const weather = document.querySelector('#weather')
const temp = document.querySelector('#temp')
const humidity = document.querySelector('#humidity')
const temp_min = document.querySelector('#temp_min')
const temp_max = document.querySelector('#temp_max')

wForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("submitted")

    const address = searchBox.value
    loc.textContent = "Loading ..."
    weather.textContent = ""

    fetch('/weather?address=' + address)
        .then((res) => {
            res.json()
                .then((data) => {
                    if (data.error) {
                        loc.textContent = data.error
                    } else {
                        loc.textContent = 'Location: '+ address
                        weather.textContent = 'Weather Status: ' + data.weather
                        temp.textContent = 'Temperature: '+ data.temp
                        humidity.textContent = 'Humidity: '+ data.humidity
                        temp_min.textContent = 'Min temprature of the day: '+ data.temp_min
                        temp_max.textContent = 'Max temprature of the day: '+ data.temp_max

                        console.log(weather.textContent);
                    }
                })
        })




})
