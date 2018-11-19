const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

function updateView() {
    $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/per_month" , updateMonthlyRides)
}
function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
}

function updateMonthlyRides(data) {
console.log(data)
}