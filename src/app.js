var mymap = L.map('mapid').setView([42.3518, -83.0458], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamNyZWV2ZXkiLCJhIjoiY2tzZDdrY3d3MG56azJ3cGE1bGx1a3ZhYSJ9.6ZA31oPkRnxBEurmDSyblw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

var greenDot = L.marker([42.321872812002, -83.071413164819], 12).addTo(mymap);
greenDot.bindPopup("<b>Green Dot Stables!</b><br>My go to for cheap food and beer (:").openPopup();
