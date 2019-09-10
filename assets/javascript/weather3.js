// Weather and TimeStamp api code

$("#search-country").on("click", function () {

    var cityState = $("#country-input").val().trim()
    var queryURL = url= "https://api.aerisapi.com/observations/" + cityState + "?client_id=2nCwoHULlzXQ8LvHXCfym&client_secret=TQO1Nn2BIkEADjcZmwrAiAL2mxmFOFinkdJosh4R"
    
    
                   
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (json) {
        if (json.success == true) {
            var ob = json.response.ob;
            // Weather
            $('#weather-results').html('The current weather is ' + ob.weather + ' <br> Currently ' + ob.tempF + '&deg;' + 'F' + '<br> Feels like' + ob.feelslikeF + 'F' + '<br> Currently ' + ob.tempC + '&deg;' + 'C' + '<br> Feels like' + ob.feelslikeC + 'C' + '<br> The Humidity is: ' + ob.humidity + '%');
            // TimeStamp
            $('#time-results').html('Date and time is ' + ob.dateTimeISO + ' <br> Sunrise with data/tme: ' + ob.sunriseISO + '<br> Sunset with date/time: ' + ob.sunsetISO);
        
        }
         else {
            alert('For the weather, please type (City),(either State, Provience, or Country): ' + json.error.description);
         }
     });
});


