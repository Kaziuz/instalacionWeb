// FUnciones que dibujan las diferentes curvas en la pagina

// jquery-ui para desplazar las imagenes
$(function()
{
    $( "#img1" ).draggable();
    $( "#img2" ).draggable();
    $( "#img3" ).draggable();
    $( "#img4" ).draggable();
    $( "#img5" ).draggable();
    $(".thumbs").draggable();
});

function dibujarCurva1()
{
	var canvas = document.getElementById("canvas01");
    var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.lineCap="round";
        ctx.lineWidth="5";
        ctx.strokeStyle="violet";
        ctx.moveTo(5, 30);
        ctx.quadraticCurveTo(320, 80, 310, 265);
        ctx.stroke();
};

function dibujarCurva2()
{
    var canvas = document.getElementById("canvas02");
    var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.lineCap="round";
        ctx.lineWidth="5";
        ctx.strokeStyle="orange";
        ctx.moveTo(95, 5);
        ctx.quadraticCurveTo(110, 240, 5, 210);
        ctx.stroke();
};

function dibujarCurva3()
{
    var canvas = document.getElementById("canvas03");
    var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.lineCap="round";
        ctx.lineWidth="5";
        ctx.strokeStyle="blue";
        ctx.moveTo(10, 13);
        ctx.quadraticCurveTo(320, -10, 690, 140);
        ctx.stroke();
};

function dibujarCurva4()
{
    var canvas = document.getElementById("canvas04");
    var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.lineCap="round";
        ctx.lineWidth="5";
        ctx.strokeStyle="red";
        ctx.moveTo(100, 240);
        ctx.quadraticCurveTo(-40, 300, 60, 390);
        ctx.stroke();
};

function dibujarCurva5()
{
    var canvas = document.getElementById("canvas05");
    var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.lineCap="round";
        ctx.lineWidth="5";
        ctx.strokeStyle="green";
        ctx.moveTo(75, 35);
        ctx.quadraticCurveTo(180, 250, 520, 110);
        ctx.stroke();
};
                        
                         