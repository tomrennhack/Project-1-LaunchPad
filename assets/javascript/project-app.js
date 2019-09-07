// return video results

$("#search-country").on("click", function () {

    var countryName = $("#country-input").val().trim()
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=" + countryName + "+info+video&type=video&videoDefinition=high&key=AIzaSyBLL2tHYwaiSDhxVoFeqHUjOqhUbuV3HRY"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response.items.length)
        $("#youtube-results").empty();

        for (var i = 0; i < response.items.length; i++) {

            var imgURL = response.items[i].snippet.thumbnails.default.url;
            var videoURL = response.items[i].id.videoId;
            // console.log(imgURL)
            // console.log(response)
            // console.log(videoURL)


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


            // Appending the paragraph and personImage we created to the "gifDiv" div we created

            imgDiv.append(videoImage);
            imgDiv.append(a);

            // Appending the gifDiv to the "#gifs-appear-here" div in the HTML
            $("#youtube-results").append(imgDiv);
        }
    });
})


// return music video results

$("#search-country").on("click", function () {

    var countryName = $("#country-input").val().trim()
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=" + countryName + "+music+video&type=video&videoDefinition=high&key=AIzaSyBLL2tHYwaiSDhxVoFeqHUjOqhUbuV3HRY"
    $.ajax({
        url: queryURL,
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


            // Appending the paragraph and personImage we created to the "gifDiv" div we created

            imgDiv.append(videoImage);
            imgDiv.append(a);

            // Appending the gifDiv to the "#gifs-appear-here" div in the HTML
            $("#youtube-music-results").append(imgDiv);
        }
    });
})


// get basic information on country

$("#search-country").on("click", function () {

    var countryName = $("#country-input").val().trim()
    var queryURL = "https://restcountries.eu/rest/v2/name/" + countryName
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response)
        // $("#currency-results").empty();

        var currencyCode = response[0].currencies[0].code;
        var flagURL = response[0].flag;

        console.log(currencyCode)
        console.log(flagURL)

        // create var for thumbnail image
        var textDiv = $("<div>");

        // Creating an image tag

        var flagImage = $("<img>");


        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Currency Code: " + currencyCode);


        // Appending the paragraph and personImage we created to the "gifDiv" div we created
        flagImage.attr("src", flagURL);
        flagImage.attr("style", "height: 100px");
        textDiv.append(p);

        // Appending the paragraph and personImage we created to the "gifDiv" div we created

        flagImage.append(flagImage);
        textDiv.append(p);

        // Appending the gifDiv to the "#gifs-appear-here" div in the HTML
        $("#currency-results").append(textDiv);
        $("#flag-results").prepend(flagImage);

    });
})


// get exchange rate

$("#search-country").on("click", function () {

    var countryName = $("#country-input").val().trim()
    var queryURL = "http://data.fixer.io/api/latest?access_key=95ada76d8a2c4471a5bcd88b4baa463c&format=1"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response)
        // $("#currency-results").empty();

        var exchangeRate = response.rates.AUD;
     
        console.log(exchangeRate)
  
        // create var for thumbnail image
        var textDiv = $("<div>");


        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Current Exchange Rate: " + exchangeRate);


        // Appending the paragraph and personImage we created to the "gifDiv" div we created
        textDiv.append(p);

        // Appending the paragraph and personImage we created to the "gifDiv" div we created
        textDiv.append(p);

        // Appending the gifDiv to the "#gifs-appear-here" div in the HTML
        $("#currency-results").append(textDiv);

    });
})


// weather api code

$("#search-country").on("click", function () {

    var cityState = $("#country-input").val().trim()
    var queryURL = url= "https://api.aerisapi.com/observations/" + cityState + "?client_id=2nCwoHULlzXQ8LvHXCfym&client_secret=TQO1Nn2BIkEADjcZmwrAiAL2mxmFOFinkdJosh4R"
    
    
                   
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (json) {
        if (json.success == true) {
            var ob = json.response.ob;
            $('#weather-results').html('The current weather is ' + ob.weather + ' <br> Fahrenheit temperature of ' + ob.tempF + '&deg;' + '<br> Celsius temperature of ' + ob.tempC + '&deg;' + '<br> The Humidity is: ' + ob.humidity + '%');
         }
         else {
            alert('An error occurred: ' + json.error.description);
         }
     });
});
        

         


