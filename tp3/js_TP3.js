$(function () {
    $("#Valider").click(function () {
        if ($("#Nom").val().length < 1 || $("#Adresse").val().length < 1 || $("#Prenom").val().length < 1 || $("#DateDeNaisance").val().length < 1 || $("#Mail").val().length < 1) {
            $("#Modal_error").modal('show');
            $("#Modal_Map").modal('hide');
        }
        else {
            $("#bienvenue").text('Bienvenue ' + $("#Nom").val());
            $("#paragragh").text('Vous êtes nés le ' + $("#DateDeNaisance").val() + ' et vous habitez');
            $("#Modal_Map").modal('show');
            $("#Modal_error").modal('hide');
var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false";
    document.getElementById("map").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
        }
    });
});

$(function () {
    $("#DateDeNaisance").datepicker({

        dateFormat: "dd/mm/yy",
        maxDate: "+1d"
});
    });





