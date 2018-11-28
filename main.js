let BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

function updateView() {
    $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/per_hour" , displayHourChart);
    //displayGraph();
}
function updateRideCount(data) {
    $("h2#Count").html(data.count)
    $("h2#Count").css('visibility', 'visible').hide().fadeIn("slow")
}

function displayHourChart(data) {

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type:'bar',
        data: {
            labels: ["12a", "1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a", "12p","1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p", ],
            datasets: [{
                label: '# of Rides Per Hour',
                data: [data['0'], data['1'], data['2'], data['3'], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11], data[12], data[13], data[14], data[15], data[16], data[17], data[18], data[19], data[20], data[21], data[22],data[23]],
                backgroundColor: [
                    
                ],
                borderColor: [
                
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}