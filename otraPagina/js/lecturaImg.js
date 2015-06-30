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
		console.log("contador:"+cont);
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

			// esto me imprime las fotos
			console.log(fotos);
			// vamos a ver cuantas fotos tenemos
			console.log("1 change");
		}
		else if(cont == 5)
		{
			img0.attr('src', 'http://localhost:8080/'+fotos[0]);
			img1.attr('src', 'http://localhost:8080/'+fotos[1]);
			img2.attr('src', 'http://localhost:8080/'+fotos[2]);
			img3.attr('src', 'http://localhost:8080/'+fotos[3]);
			img4.attr('src', 'http://localhost:8080/'+fotos[4]);
			console.log("2 change");
		}
		else if(cont == 7)
		{
			img0.attr('src', 'http://localhost:8080/'+fotos[5]);
			img1.attr('src', 'http://localhost:8080/'+fotos[6]);
			img2.attr('src', 'http://localhost:8080/'+fotos[7]);
			img3.attr('src', 'http://localhost:8080/'+fotos[8]);
			img4.attr('src', 'http://localhost:8080/'+fotos[9]);
			console.log("3 change");
		}
		else if(cont == 10)
		{
			img0.attr('src', 'http://localhost:8080/'+fotos[10]);
			img1.attr('src', 'http://localhost:8080/'+fotos[11]);
			img2.attr('src', 'http://localhost:8080/'+fotos[12]);
			img3.attr('src', 'http://localhost:8080/'+fotos[13]);
			img4.attr('src', 'http://localhost:8080/'+fotos[14]);
			console.log("4 change");	
		}
		else if(cont == 12)
		{
			cont = 0;
			console.log("restart");
		};
		log.value = cont;
	},1000);
}

