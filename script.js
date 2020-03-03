var apiKey = '41a24f1f0a49193e9c9058894dd610f4';
document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons() {
    document.getElementById("submitWeather").addEventListener('click', function (event) {
        var req = new XMLHttpRequest(),
            city = document.getElementById('city').value,
            country = document.getElementById('country').value,
            zip = document.getElementById('zip').value;
        if (zip) {
            req.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us"
                + "&appid=" + apiKey, true);
        } else {
            req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country
                + "&appid=" + apiKey, true);
        }

        req.addEventListener('load', function () {
            if (req.status >= 200 && req.status < 400) {
                var request = JSON.parse(req.responseText);
                // print out the weather results
                document.getElementById('cityResults').textContent = request.name;
                document.getElementById('temperatureResults').textContent = request.main.temp;
                document.getElementById('conditionResults').textContent = request.weather[0].description;
            } else {
                console.log("Error in network request: " + req.statusText);
            }
        });
        req.send(null);
        event.preventDefault();
    });
}
