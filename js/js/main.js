(function() {
	var map = new google.maps.Map(document.querySelector('.map-wrapper')),
	marker;


	function initMap(position) {
		/*map = , 
			{
				center: {lat: 42.983233, lng: -81.250688},
				zoom: 14
				}
			);*/
map.setCenter({lat: position.coords.latitude, lng: position.coords.longitude });

map.setZoom(16); 

		marker = new google.maps.Marker({
			//position: {lat: 42.983233, lng: -81.250688},
			position: {lat: position.coords.latitude, lng: position.coords.longitude},
			map: map, 
			title: "Hello World!"
		});	 
	} 
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(initMap, handleError);
	} else {
		//give some kind of error message to user 
		console.log("your browser does not support geolocation");
	}

	function handleError(e) {
		console.log(e);
	}

})();