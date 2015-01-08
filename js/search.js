// Called automatically when Youtube JavaScript client library is loaded.
function onClientLoad() {
	console.log("Client loaded successfully");
    gapi.client.setApiKey('AIzaSyBOACJPJ7RavZQPe-1uYXIm2TlRsWOxsF4'); //API key using pradeep Console Account
    gapi.client.load('youtube', 'v3', ytReady);
}

function ytReady(){
	alert('Ready');
}

function onYouTubeApiLoad(tag) {
	var request = gapi.client.youtube.search.list({
		part: 'snippet',
		q:tag
	});
	request.execute(onYTSearchResponse);
}

function onYTSearchResponse(resultObject) {

	var size = resultObject.items.length;
	var count = 0;
	for(var i=1;i<=size;i++){
                if(resultObject.items[i].id.videoId==undefined) //because it's channel
                	continue;
                else
                	++count;

                var ifrm = ifrm = document.getElementById("youtubeVideo"+count);
                console.log("youtubeVideo"+count);
                var url = 'https://www.youtube.com/embed/'+resultObject.items[i].id.videoId;
                ifrm.setAttribute("src",url);

                if(count==2)
      break; //currently showing only two
}
}

var showFlickr = function(tag) {
	var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9682d84efa5e55786d016dd1c4b89df8&sort=interestingness-desc&per_page=9&format=json&callback=jsonFlickrApi&tags='+tag;
	$.ajax({
		type: 'GET',
		url: url,
		async: false,
		jsonpCallback: 'jsonFlickrApi',
		contentType: "application/json",
		dataType: 'jsonp'
	});
};

var wikiAPI = function(tag){

	$.ajax({
		'url': 'https://en.wikipedia.org/w/api.php',
		'data': {
			'action': tag,
			'prop': 'extracts',
			'titles':tag,
			'format': 'json',
			'origin': location.origin
		},
		'xhrFields': {
			'withCredentials': true
		},
		'success': function( dataObject ) {

			var wikiDiv1 = document.getElementById('wikipedia1');
			var wikiDiv2 = document.getElementById('wikipedia2');
          var jsonObject = eval('(' +dataObject+ ')'); //bad change it todo
          var pages = jsonObject.query.pages;
             for (k in pages) { // here k represents the page no i.e. 28249265
             	var data = pages[k].extract;
             	wikiDiv1.innerHTML += data;
             	wikiDiv2.innerHTML += data;
             }
             console.log('logging json '+JSON);

         },
         'dataType': 'json'
     });

}

var jsonFlickrApi = function(results) {
	var photos = results.photos.photo;
	$.each(photos, function(index, photo) {
		$(document.createElement("img"))
		.attr({ src: 'https://farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'_s.jpg' })
		.addClass("flickrGallery")
		.appendTo(flickrGallery);
	});
};

