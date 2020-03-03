var apiKey = '41a24f1f0a49193e9c9058894dd610f4';

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
  document.getElementById('weather').addEventListener('click', function(event){
    var req = new XMLHttpRequest();

    req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=paris,fr&appid=' + apiKey, false);
    req.addEventListener('load',function(){
      if(req.status >= 200 && req.status < 400){
        var response = JSON.parse(req.responseText);
                document.getElementById('cityResults').textContent = request.name;
                document.getElementById('temperatureResults').textContent = request.main.temp;
                document.getElementById('conditionResults').textContent = request.weather[0].description;
      }
      else{
        console.log("Error in network request: " + req.statusText);
      }});

    req.send(null);

    event.preventDefault();
  });
}
