import axios from "axios";

function myNav(lat, long) {
    this.latitude = lat;
    this.longitude = long;
}
export let myNavObj = 0;
navigator.geolocation.getCurrentPosition((position) => {
    myNavObj = new myNav(position.coords.latitude, position.coords.longitude)
});


function myLocation(country, city, locality) {
    this.country = country;
    this.city = city;
    this.locality = locality
}
export let myLocations = 0;


axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${myNavObj.latitude}&longitude=${myNavObj.longitude}`).then(res => {
    myLocations = new myLocation(res.data.countryName, res.data.principalSubdivision, res.data.locality);
})