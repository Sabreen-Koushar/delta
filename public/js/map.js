//const Listing = require("../../models/listing");

mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // corrected style URL
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 9, // starting zoom
});
const marker = new mapboxgl.Marker({ color: 'red' })
  .setLngLat(listing.geometry.coordinates) // coordinates should be an array like [lng, lat]
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`
    )
  )
  .addTo(map);
















