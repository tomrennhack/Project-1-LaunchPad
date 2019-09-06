var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://spotifypublicapidimasv1.p.rapidapi.com/getAlbum",
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "SpotifyPublicAPIdimasV1.p.rapidapi.com",
		"x-rapidapi-key": "8b469e969fmsh219bfb0c8db3d87p15fb4cjsn4aae14ef7b1a",
		"content-type": "application/x-www-form-urlencoded"
	},
	"data": {}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});