const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=fb8789e2e7db4713b467e0359fe7a8bd&query='+ latitude + ',' + longitude 

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback (undefined , 'Temperature is '+ response.body.current.temperature + ' degrees , But it feels like '+ response.body.current.feelslike +' degrees and climate is ' + response.body.current.weather_descriptions + ' and there is ' + response.body.current.precip + '% chances of  rain')
        }
    })
}

module.exports = forecast
/*const request=require('request')
const forecast=(latitude,longitude,callback) =>{
       const url = 'http://api.weatherstack.com/current?access_key=fb8789e2e7db4713b467e0359fe7a8bd&query='+ latitude + longitude  
       request({ url: url, json: true }, (error, response) => {
        if (error) {
        callback('Unable to connect to weather service', undefined)
        } else if (response.body.error) {
        callback('Unable to find location.',undefined)
        } else{
        callback (' ' + response.body.current.temperature + ' But it feels like '+ response.body.current.feelslike )
        }
        })
}
module.exports = forecast*/