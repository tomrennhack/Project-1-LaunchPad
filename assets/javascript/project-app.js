// youtube query

$("#search-country").on("click", function () {

    var countryName = $("#country-input").val().trim()
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=" + countryName + "+info&type=video&videoDefinition=high&key=AIzaSyBLL2tHYwaiSDhxVoFeqHUjOqhUbuV3HRY"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log("workingagain");
        console.log(response.items.length)

        for (var i = 0; i < response.items.length; i++) {

            var imgURL = response.items[i].snippet.thumbnails.default.url;
            console.log(imgURL)

            var imgDiv = $("<div>");

            // Storing the result title
            var Title = response.items[i].snippet.title;

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Title: " + Title);

            // Creating an image tag
           
            var videoImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
            videoImage.attr("src", response.items[i].snippet.thumbnails.default.url);

            // Appending the paragraph and personImage we created to the "gifDiv" div we created
           
            imgDiv.append(videoImage);
            imgDiv.append(p);

            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            $("#youtube-results").append(imgDiv);
        }
    });
})