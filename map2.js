mapboxgl.accessToken = 'pk.eyJ1IjoibWlzaGF2YWlkIiwiYSI6ImNsM3U4bHR3bjI4ZWUzaW9leGlrbXN2ZmcifQ.JA7tcQL3G1x8i7fZuWw2nA';
var map2 = new mapboxgl.Map({
    container: "map2",
    style: 'mapbox://styles/mishavaid/cl3x5lp6e000l14pg8rzw80ou',
    zoom: 3.5,
    maxZoom: 9,
    minZoom: 3,
    // the point he gave was -85.5, 37.7 for zooming in on Kentucky
    center: [-98.5795, 37.2283],
    
    projection: 'albers',
});
map2.on("load", function () {
   
  map2.addLayer(
    {
      id: "police_brutality_points",
      type: "circle",
      source: {
        type: "geojson",
        data: "https://raw.githubusercontent.com/browninstitute/pointsunknowndata/main/webmapAssignmentDataset/policeBrutality.geojson",
      },
      paint: {
        'circle-radius': 6,
        "circle-color": '#e41a1c',
        "circle-stroke-color": "#ffffff",
        "circle-stroke-width": 0,
        "circle-opacity": 0.5,
      },
      minzoom: 3,
    },
    "waterway-label"
  );

  map2.addLayer(
    {
      id: "us_state_outline",
      type: "line",
      source: {
        type: "geojson",
        data: "data/statesElections.geojson",
      },
      paint: {
        "line-color": "#ffffff",
        "line-width": 0.7,
      },
    },
    "police_brutality_points"
  );
});
  


