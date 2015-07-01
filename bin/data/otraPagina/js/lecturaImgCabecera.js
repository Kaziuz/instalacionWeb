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

	var eventoDirList = $({}); //basado en http://stackoverflow.com/questions/22407917/how-to-emit-an-event-with-jquery

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
		console.log("drawImagesPopup");
		console.log(_.takeRight(fotos,5));
		
		// De [fotos] imprimo los últimos 5 elementos y los pongo en el dom
	}

	function drawImagesMosaic(){
		console.log("drawImagesMosaic");
		console.log(fotos.slice(1));
		// De [fotos] tomo las 70 últimas y pinto el mosaico
	}
	
	setInterval(refreshDirList,3000);
}

