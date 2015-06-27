window.onload = function()
{
    var img0  = $("#img1, col-md-2");
	var img1  = $("#img2, col-md-2");
	var img2  = $("#img3, col-md-2");
	var img3  = $("#img4, col-md-2");
	var img4  = $("#img5, col-md-2");

	var cont = 0;
	var log = document.getElementById('log');

	setInterval(function()
	{
		cont += 1;

		if(cont == 1)
		{
			img0.attr('src', 'imagenes/0.jpg');
			img1.attr('src', 'imagenes/1.jpg');
			img2.attr('src', 'imagenes/2.jpg');
			img3.attr('src', 'imagenes/3.jpg');
			img4.attr('src', 'imagenes/4.jpg');
			console.log("1 change");
		}
		else if(cont == 4)
		{
			img0.attr('src', 'imagenes/5.jpg');
			img1.attr('src', 'imagenes/6.jpg');
			img2.attr('src', 'imagenes/7.jpg');
			img3.attr('src', 'imagenes/8.jpg');
			img4.attr('src', 'imagenes/9.jpg');
			console.log("2 change");
		}
		else if(cont == 8)
		{
			img0.attr('src', 'imagenes/1.jpg');
			img1.attr('src', 'imagenes/2.jpg');
			img2.attr('src', 'imagenes/5.jpg');
			img3.attr('src', 'imagenes/7.jpg');
			img4.attr('src', 'imagenes/3.jpg');
			console.log("3 change");
		}
		else if(cont == 12)
		{
			cont = 0;
			console.log("restart");
		};
		log.value = cont;
	},1000);
}

