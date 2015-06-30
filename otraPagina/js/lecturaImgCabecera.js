window.onload = function()
{
	var img0  = $("#img1, col-md-2");
	var img1  = $("#img2, col-md-2");
	var img2  = $("#img3, col-md-2");
	var img3  = $("#img4, col-md-2");
	var img4  = $("#img5, col-md-2");

	var cont = 0;
	var log = document.getElementById('log');
	var fotos = [];
	
	var imagenesMosaico = $("div.thumbs > div > img");
	var imagenesSlide = $("div.espacio-fotogrande > div > img.img-foto");

	var eventoDirList = $({}); 

	//basado en http://stackoverflow.com/questions/22407917/how-to-emit-an-event-with-jquery

	eventoDirList.on("DirListRefrescado", drawImagesPopup);
	eventoDirList.on("DirListRefrescado", drawImagesMosaic);
	
	function refreshDirList(){
		console.log("Ejecuta refreshDirList");
		$.ajax({
			url:"http://localhost:8080/imagenes",
			success: function(data){
				fotos = [];
				$(data).find("td > a").each(function(){
					fotos.push( $(this).attr("href"));
				});
			} 
		});
		eventoDirList.trigger("DirListRefrescado");
	}
	
	function drawImagesPopup(){
		var photos = _.takeRight(fotos, 5); 
		img0.attr('src', photos[0]);
		img1.attr('src', photos[1]);
		img2.attr('src', photos[2]);
		img3.attr('src', photos[3]);
		img4.attr('src', photos[4]);
	}

	function drawImagesMosaic(){
		var photos = fotos.slice(1);
		console.log("drawImagesMosaic");
		var imagenesMosaico = $("div.thumbs > div > img");
		$.each(imagenesMosaico, function(i,n){
			$(n).attr('src',photos[i]);
		});
	}	
	setInterval(refreshDirList,3000);
}

