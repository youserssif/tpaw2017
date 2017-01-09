window.onload = function () {
    document.getElementById("searchCity").addEventListener("submit", function (event) {
        event.preventDefault(); // pour annuler le rechargement de la page
        var city = document.getElementById("city").value;

        searchCity(city);
          });
        document.getElementById("btn_gps").addEventListener("click", function getLocation() {

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(searchLatLng, showError);
               
            } else {
                document.getElementById("maps").innerHTML = "Geolocation is not supported by this browser.";
            }

        });

  
}


function searchCity(_city) {
    //console.log('searchCity', 'Hello from ' + _city);
    //A complet dans la suite du TP

    var request = new XMLHttpRequest();
    request.open('GET', ' https://demo.bilelz.fr/owmap/?q=' + _city + '&appid=0ada432b59deb9716c357092c5f79be6', true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var responseJSON = JSON.parse(request.responseText);
            // console.log(responseJSON);
            var date = new Date();
            var s = date.getMinutes();
            var h = date.getHours();
            var icons = responseJSON.weather[0].icon;
            var temp = (responseJSON.main.temp - 273).toFixed(0);
            var humidity = responseJSON.main.humidity;
            var cloud = responseJSON.clouds.all;
            var wind = responseJSON.wind.speed;
            document.getElementById("nom_w").innerHTML = responseJSON.name;
            document.getElementById("heures").innerHTML = "@" + h + ":" + s;
            document.getElementById("icons").innerHTML = "<img src='" + icons + ".png'/>";
            document.getElementById("temps").innerHTML = temp + "°";
            document.getElementById("humide").innerHTML = "<b>humide </b> " + humidity + "%";
            document.getElementById("nuages").innerHTML = "<b>Nuage    </b>     " + cloud + "%";
            document.getElementById("vents").innerHTML = "<b>Vent      </b>     " + wind + "m/s";
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + _city + "&zoom=14&size=400x300&sensor=false";
    document.getElementById("maps").innerHTML = "<img src='" + img_url + "'> ";
        } else {
            alert("Erreur de téléchargement");
        }
    };

    request.onerror = function () {
    };

    request.send();
}








function searchLatLng(_lat) {
    var latlon = _lat.coords.latitude + ',' + _lat.coords.longitude;



    var request = new XMLHttpRequest();
    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat='+_lat.coords.latitude+'&lon=' +_lat.coords.longitude+ '&units=metric&appid=0bb5f32378f4c71e43767c7fad870bd8', true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var responseJSON = JSON.parse(request.responseText);
            // console.log(responseJSON);
            var date = new Date();
            var s = date.getMinutes();
            var h = date.getHours();
            var icons = responseJSON.weather[0].icon;
            var temp = (responseJSON.main.temp - 273).toFixed(0);
            var humidity = responseJSON.main.humidity;
            var cloud = responseJSON.clouds.all;
            var wind = responseJSON.wind.speed;
            document.getElementById("nom_w").innerHTML = responseJSON.name;
            document.getElementById("heures").innerHTML = "@" + h + ":" + s;
            document.getElementById("icons").innerHTML = "<img src='" + icons + ".png'/>";
            document.getElementById("temps").innerHTML = temp + "°";
            document.getElementById("humide").innerHTML = "<b>humide </b> " + humidity + "%";
            document.getElementById("nuages").innerHTML = "<b>Nuage    </b>     " + cloud + "%";
            document.getElementById("vents").innerHTML = "<b>Vent      </b>     " + wind + "m/s";
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false";
    document.getElementById("maps").innerHTML = "<img src='" + img_url + "'> ";
        } else {
            alert("Erreur de téléchargement");
        }
    };

    request.onerror = function () {  };

    request.send();
}
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("maps").innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("maps").innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            document.getElementById("maps").innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("maps").innerHTML = "An unknown error occurred."
            break;
    }
}