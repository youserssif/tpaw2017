
function verifier() {
    var x = document.getElementById("nom").value;
    var x1 = document.getElementById("prenom").value;
    

    if ((x.length < 5) || (x.length == "") || (x1.length < 5) || (x1.length == "")) {
        document.getElementById("error").innerHTML = "La saisie du nom/prénom est obligatoir et dois être <5";
        document.getElementById("resultat").innerHTML = "";
    //} else if () {
     //   document.getElementById("error").innerHTML = "La saisie du prénom est obligatoir et dois être <5";
      //  document.getElementById("resultat").innerHTML = "";
    } else {
        document.getElementById("resultat").innerHTML = "Hello. [" + x + " " + x1 + "]";
        document.getElementById("error").innerHTML = "";
    }
}
