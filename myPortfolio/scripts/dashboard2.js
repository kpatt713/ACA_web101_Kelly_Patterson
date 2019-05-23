var multiple = new Multiple({
    selector: '.item',
    background: 'linear-gradient(#273463, #8B4256)'
  });

  function myLocation() {
    var loc= document.getElementById("myLoc");
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        loc.innerHTML = "Location tracking not available.";
    }
}
function showPosition (position) {
    var loc= document.getElementById("myLoc");
    loc.innerHTML = "Longitude: " + position.coords.longitude + "<br>Latitude: " + position.coords.latitude + "<br>";
}