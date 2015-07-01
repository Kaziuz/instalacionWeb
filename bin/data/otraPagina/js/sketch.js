// FUnciones que dibujan las diferentes curvas en la pagina

function dibujarCurva1()
{
	var canvas = document.getElementById("canvas01");
    var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.lineCap="round";
        ctx.lineWidth="5";
        ctx.strokeStyle="violet";
        ctx.moveTo(5, 50);
        ctx.quadraticCurveTo(320, 80, 350, 485);
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
        ctx.moveTo(95, 10);
        ctx.quadraticCurveTo(110, 540, 5, 340);
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
        ctx.moveTo(10, 10);
        ctx.quadraticCurveTo(320, -10, 680, 90);
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
        ctx.moveTo(115, 240);
        ctx.quadraticCurveTo(-90, 500, 100, 540);
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
        ctx.moveTo(95, 35);
        ctx.quadraticCurveTo(180, 250, 570, 70);
        ctx.stroke();
};
                        
                         