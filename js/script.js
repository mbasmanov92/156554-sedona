var map_canvas = document.getElementById("map-canvas");
			var link = document.querySelector(".search-form-title");	
			var popup = document.querySelector(".search-form-container");
			
			if (map_canvas) {
			if (map_canvas.classList.contains("no-script-map")) {
			map_canvas.classList.remove("no-script-map");
			}
			var map_options = {
			center: new google.maps.LatLng(34.88, -111.76),
			zoom: 9,
			mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(map_canvas, map_options);
			var marker = new google.maps.Marker({
			position: new google.maps.LatLng(34.88, -111.76),
			map: map
			});
			}

			link.addEventListener("click", function(event) {
			event.preventDefault();
			popup.classList.toggle("search-form-visible");
			});