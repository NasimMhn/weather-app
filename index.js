



const city = document.getElementById("city") 
const weather = document.getElementById("weather")
const temp = document.getElementById("temp")
const sunrise = document.getElementById("sunrise")
const sunset = document.getElementById("sunset")

let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// http://api.openweathermap.org/data/2.5/find?q=New York,US&units=metric&APPID=da417ece928b0291f06b75fca4777157
fetch ('http://api.openweathermap.org/data/2.5/forecast?q=Stockholm,Sweden&units=metric&APPID=da417ece928b0291f06b75fca4777157')
    .then((response)=> {
        return response.json()
    }) 

    .then((json) => {
        var sunRise = new Date(json.city.sunrise*1000)
        var sunSet = new Date(json.city.sunset*1000)
        console.log(json)

        city.innerHTML = json.city.name
        weather.innerHTML = json.list[0].weather[0].main
        temp.innerHTML = `${json.list[0].main.temp} &deg;C`
        var today = json.list[0].dt

        sunrise.innerHTML = `${("0" + sunRise.getHours()).slice(-2)}:${("0" + sunRise.getMinutes()).slice(-2)}`
        sunset.innerHTML = `${("0" + sunSet.getHours()).slice(-2)}:${("0" + sunSet.getMinutes()).slice(-2)}`
        
        
        json.list.forEach((day) => {
            var datum = new Date(day.dt_txt)
            if (datum.getHours() != "12") return

            document.getElementById("weekdays").innerHTML += `<p>${weekdays[datum.getDay()]}, ${day.main.temp} &deg;C </p>`

            //container.innerHTML += `<p>${person.name} is on the ${person.craft} </p>`           
            
        })
    })