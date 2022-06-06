mapboxgl.accessToken = 'pk.eyJ1IjoibWlzaGF2YWlkIiwiYSI6ImNsM3U4bHR3bjI4ZWUzaW9leGlrbXN2ZmcifQ.JA7tcQL3G1x8i7fZuWw2nA';
var map2 = new mapboxgl.Map({
    container: "map2",
    style: 'mapbox://styles/mishavaid/cl3x5lp6e000l14pg8rzw80ou',
    zoom: 3.5,
    maxZoom: 9,
    minZoom: 3,
    // the point he gave was -85.5, 37.7 for zooming in on Kentucky
    center: [-98.5795, 37.2283],
    maxBounds: [
      [-180, 15],
      [-30, 72],
    ],
    projection: 'albers',
});
