$(document).ready(function () {
    console.log("ready!");

    // GET EXCHANGE RATE
    // var newexchangeRateURL = "https://free.currconv.com/api/v7/convert?q=USD_AUD&compact=ultra&apiKey=e7bc0a1e1902cbc31b55"

    // $.ajax({
    //     url: newexchangeRateURL,
    //     method: "GET"
    // }).then(function (response) {
    //     console.log(response.USD_AUD)

    // })

});


$("#search-country").on("click", function () {

    // Split input to get country & city name
    var userInput = $('#country-input').val();
    var cityName = userInput.substr(0, userInput.indexOf(',')).trim();
    var countryName = userInput.substr(userInput.indexOf(',') + 1).trim();

    // RETURN YOUTUBE RESULTS
    var infoVideoURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=" + countryName + "+info+video&type=video&videoDefinition=high&key=AIzaSyBLL2tHYwaiSDhxVoFeqHUjOqhUbuV3HRY"
    var musicvideoURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=" + countryName + "+music+video&type=video&videoDefinition=high&key=AIzaSyBLL2tHYwaiSDhxVoFeqHUjOqhUbuV3HRY"
    var newsvideoURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=" + countryName + "+news+video&type=video&videoDefinition=high&key=AIzaSyBLL2tHYwaiSDhxVoFeqHUjOqhUbuV3HRY"

    // YOUTUBE INFO API RESULTS
    $.ajax({
        url: infoVideoURL,
        method: "GET"
    }).then(function (response) {

        console.log(response.items.length)
        $("#youtube-results").empty();

        for (var i = 0; i < response.items.length; i++) {

            var imgURL = response.items[i].snippet.thumbnails.default.url;
            var videoURL = response.items[i].id.videoId;

            // create var for thumbnail image
            var imgDiv = $("<div>");


            // Storing the result title
            var Title = response.items[i].snippet.title;

            // Creating a paragraph tag with the result item's rating
            var a = $("<a>").text("Title: " + Title);

            // Creating an image tag

            var videoImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            videoImage.attr("src", response.items[i].snippet.thumbnails.default.url);
            videoImage.attr("href", "https://www.youtube.com/watch?v=" + videoURL);
            a.attr("href", "https://www.youtube.com/watch?v=" + videoURL);


            // Appending the paragraph and image to div created
            imgDiv.append(videoImage);
            imgDiv.append(a);

            // Appending the results to appear to div created
            $("#youtube-results").append(imgDiv);
        }
    });

    // RETURN MUSIC VIDEOS
    $.ajax({
        url: musicvideoURL,
        method: "GET"
    }).then(function (response) {

        console.log(response.items.length)
        $("#youtube-music-results").empty();

        for (var i = 0; i < response.items.length; i++) {

            var imgURL = response.items[i].snippet.thumbnails.default.url;
            var videoURL = response.items[i].id.videoId;

            // create var for thumbnail image
            var imgDiv = $("<div>");

            // Storing the result title
            var Title = response.items[i].snippet.title;

            // Creating a paragraph tag with the result item's rating
            var a = $("<a>").text("Title: " + Title);

            // Creating an image tag

            var videoImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
            videoImage.attr("src", response.items[i].snippet.thumbnails.default.url);
            videoImage.attr("href", "https://www.youtube.com/watch?v=" + videoURL);
            a.attr("href", "https://www.youtube.com/watch?v=" + videoURL);

            // Appending the paragraph and image to div created
            imgDiv.append(videoImage);
            imgDiv.append(a);

            // Appending the results to appear to div created
            $("#youtube-music-results").append(imgDiv);
        }
    });

    // RETURN NEWS VIDEOS
    $.ajax({
        url: newsvideoURL,
        method: "GET"
    }).then(function (response) {

        console.log(response.items.length)
        $("#youtube-news-results").empty();

        for (var i = 0; i < response.items.length; i++) {

            var imgURL = response.items[i].snippet.thumbnails.default.url;
            var videoURL = response.items[i].id.videoId;

            // create var for thumbnail image
            var imgDiv = $("<div>");

            // Storing the result title
            var Title = response.items[i].snippet.title;

            // Creating a paragraph tag with the result item's rating
            var a = $("<a>").text("Title: " + Title);

            // Creating an image tag

            var videoImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
            videoImage.attr("src", response.items[i].snippet.thumbnails.default.url);
            videoImage.attr("href", "https://www.youtube.com/watch?v=" + videoURL);
            a.attr("href", "https://www.youtube.com/watch?v=" + videoURL);


            // Appending the paragraph and image to div created
            imgDiv.append(videoImage);
            imgDiv.append(a);

            // Appending the results to appear to div created
            $("#youtube-news-results").append(imgDiv);
        }
    });


    // GET GENERAL COUNTRY INFO
    var countryInfoURL = "https://restcountries.eu/rest/v2/name/" + countryName

    $.ajax({
        url: countryInfoURL,
        method: "GET"
    }).then(function (response) {

        console.log(response)
        $("#currency-results").empty();
        $("#flag-results").empty();

        // Create variables from response
        var currencyCode = response[0].currencies[0].code;
        var flagURL = response[0].flag;

        // create var for thumbnail image
        var textDiv = $("<div>");

        // Creating an image tag
        var flagImage = $("<img>");

        // Creating a paragraph tag with the result currency code
        var p = $("<p>").text("Currency Code: " + currencyCode);

        // Appending the paragraph and flagimage we created to the "gifDiv" div we created
        flagImage.attr("src", flagURL);
        flagImage.attr("style", "height: 100px; display: block; margin-left: auto; margin-right: auto; width: 50%;");
        textDiv.append(p);

        // Appending the paragraph and image to div created
        flagImage.append(flagImage);
        textDiv.append(p);

        // Appending the results to appear to div created
        $("#currency-results").append(textDiv);
        $("#flag-results").prepend(flagImage);

        // GET EXCHANGE RATE
        var exchangeRateURL = "https://free.currconv.com/api/v7/convert?q=USD_" + currencyCode + "&compact=ultra&apiKey=e7bc0a1e1902cbc31b55"

        $.ajax({
            url: exchangeRateURL,
            method: "GET"
        }).then(function (response) {
            console.log(Object.values(response)[0])
            var exchangeRate = Object.values(response)[0].toFixed(2);

            // create var for thumbnail image
            var textDiv = $("<div>");
            var currencyConverterDiv = $("<div>");
            currencyConverterDiv.attr('id', 'CurrencyDisplay');

            // create currency conversion section
            var formInput = $("<input>")
            formInput.attr('class', 'form-control input-lg col-9 mr-2');
            formInput.attr('id', 'currencyInput');
            

            var buttonInput = $("<input>")
            buttonInput.attr('type', 'submit');
            buttonInput.attr('id', 'currencyButton');
            buttonInput.attr('class', 'btn btn-primary col');
            buttonInput.attr('value', 'Convert');
            buttonInput.attr("style", "margin-top: 10px; margin-bottom: 10px");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Current Exchange Rate: " + exchangeRate);

            // Appending the paragraph and personImage we created to the "gifDiv" div we created
            textDiv.append(p);

            // Appending the gifDiv to the "#gifs-appear-here" div in the HTML
            $("#currency-results").append(textDiv);
            $("#currency-results").append(formInput);
            $("#currency-results").append(buttonInput);
            $("#currency-results").append(currencyConverterDiv);

            // currency conversion calculation
            $("#currencyButton").on("click", function () {

                $("#CurrencyDisplay").empty();

                var userInput = $('#currencyInput').val();

                // create var for currency converter
                
                var convertedAmount = (userInput * exchangeRate).toFixed(0);
                var CurrencyTextDiv = $("<p>").text("Boom, you have: " + convertedAmount + " " + currencyCode + " to spend when you land");
                
                currencyConverterDiv.append(CurrencyTextDiv);
                
                currencyConverterDiv.attr('id', 'CurrencyDisplay');

                $("#CurrencyDisplay").append(CurrencyTextDiv);
            })
        });

    });

    //================================================================================================================



    // Weather and TimeStamp api code



    var cityState = $("#country-input").val().trim()
    var queryURL = "https://api.aerisapi.com/observations/" + cityState + "?client_id=2nCwoHULlzXQ8LvHXCfym&client_secret=TQO1Nn2BIkEADjcZmwrAiAL2mxmFOFinkdJosh4R"
    
    // ajax for weather

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (json) {
        if (json.success == true) {
            var ob = json.response.ob;


           
             // Weather
             $('#weather-results').html('The current weather is ' + ob.weather + '<br>' + ' <br> Currently ' + ob.tempF + '&deg;' + 'F' + '<br> Feels like ' + ob.feelslikeF +  '&deg;' + 'F' + '<br>' + '<br> Currently ' + ob.tempC + '&deg;' + 'C' + '<br> Feels like ' + ob.feelslikeC + '&deg;'  + 'C' +  '<br>' + '<br> The Humidity is: ' + ob.humidity + '%');
      


    // ajax for time zone
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
     


        console.log(response)

        var zoneTime = ob.dateTimeISO;
        var tz = new Date (zoneTime);
        console.log(tz.toString());
        
        var timeDate = ob.dateTimeISO;
        var dt = new Date (timeDate);
        console.log(dt.toString());

        var riseGet = ob.sunriseISO;
        var sr = new Date (riseGet);
        console.log(sr.toLocaleTimeString());

        var setGet = ob.sunsetISO;
        var ss = new Date (setGet);
        console.log(ss.toLocaleTimeString());

        
       

         // TimeStamp
         $('#time-results').html('Today is ' + '<br>' + dt +  '<br>' + ' <br> Sunrise at: ' + '<br>' + sr.toLocaleTimeString() + '<br>' +  '<br> Sunset at: ' + '<br>' + ss.toLocaleTimeString() + '<br>' + '<br>');
         

      
    });
    
}else {
   alert('For the weather, please type (City),(either State, Provience, or Country): ');
}


});


// onClick ends


})






