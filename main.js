var x = document.getElementById("map");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
        
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
var L1=document.getElementById("nom").value.length;
var L2=document.getElementById("prenom").value.length;
var L3=document.getElementById("dt_nai").value.length;
var L4=document.getElementById("addr").value.length;
var L5=document.getElementById("email").value.length;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false";
    document.getElementById("map").innerHTML = "<img src='"+img_url+"'>";
    document.getElementById("addr").value=latlon;
    document.getElementById("addr").innerHTML=latlon.length +" car";
     document.getElementById("nbr_nom").innerHTML=L1+" car";
     document.getElementById("nbr_prenom").innerHTML=L2+" car";
     document.getElementById("nbr_nai").innerHTML=L3+" car";
     document.getElementById("nbr_lo").innerHTML=L4+" car";
     document.getElementById("nbr_email").innerHTML=L5+" car";

    

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
$(function () {
    $("#dt_nai").datepicker({

        dateFormat: "dd/mm/yy",
        maxDate: "0"
});
    });
function  save(){


 if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", document.getElementById("nom").value);
    localStorage.setItem("ferstnam", document.getElementById("prenom").value);
    localStorage.setItem("brath", document.getElementById("dt_nai").value);
    localStorage.setItem("addres",document.getElementById("addr").value);
    localStorage.setItem("mail",document.getElementById("email").value);
    // Retrieve
    document.getElementById("nom").innerHTML = localStorage.getItem("lastname");
    document.getElementById("prenom").innerHTML = localStorage.getItem("ferstnam");
    document.getElementById("dt_nai").innerHTML = localStorage.getItem("brath");
    document.getElementById("addr").innerHTML = localStorage.getItem("addres");
    document.getElementById("email").innerHTML = localStorage.getItem("mail");
    document.getElementById("resultat").innerHTML="<b>BRAVO!!</b> le formulaire est sauvegardé"

} else {
    document.getElementById("nom").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}