window.onload = function()
{
    var img0  = $("#img1, col-md-2");
	var img1  = $("#img2, col-md-2");
	var img2  = $("#img3, col-md-2");
	var img3  = $("#img4, col-md-2");
	var img4  = $("#img5, col-md-2");

	var cont = 0;
	var log = document.getElementById('log');
	var	fotos = [];		

	setInterval(function()
	{
		
		cont += 1;
		// se pregunta si hay mas fotos nuevas en el DOM y actualiza el contenido
		if(cont == 1)
		{
			$.ajax({
				url:"http://localhost:8080",
				success: function(data){
					fotos = [];
					$(data).find("td > a").each(function(){
						fotos.push( $(this).attr("href"));
					});
				} 

			});
		}
		else if(cont == 2)
		{
			img0.attr('src', 'http://localhost:8080/'+fotos[11]);
			img1.attr('src', 'http://localhost:8080/'+fotos[12]);
			img2.attr('src', 'http://localhost:8080/'+fotos[13]);
			img3.attr('src', 'http://localhost:8080/'+fotos[14]);
			img4.attr('src', 'http://localhost:8080/'+fotos[15]);
		}
		else if(cont == 10)
		{
			cont = 0;
			console.log("restart");
		};
		log.value = cont;
	},1000);
}

