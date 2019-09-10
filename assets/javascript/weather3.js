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
             $('#weather-results').html('The current weather is ' + ob.weather + '<br>' + ' <br> Currently ' + ob.tempF + '&deg;' + 'F' + '<br> Feels like ' + ob.feelslikeF +  '&deg;' + 'F' + '<br>' + '<br> Currently ' + ob.tempC + '&deg;' + 'C' + '<br> Feels like ' + ob.feelslikeC + '&deg;'  + 'C' +  '<br>' + '<br> The Humidity is: ' + ob.humidity + '%');
             // TimeStamp
             $('#time-results').html('Date and time is ' + '<br>' + ob.dateTimeISO +  '<br>' + ' <br> Sunrise with data/time: ' + '<br>' + ob.sunriseISO + '<br>' +  '<br> Sunset with date/time: ' + '<br>' + ob.sunsetISO);
         
        }

         else {
            alert('For the weather, Please type (City),(either State, Provience, or Country): ');
         }
     });
});
       