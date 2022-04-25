$(document).ready(function(){

    var imageDpi = 1/13;

    var can = document.getElementById('canvas');
    var ctx = can.getContext('2d');
    ctx.font = '15px serif';
    var startX, startY;

    $("canvas").mousedown(function(event){
        startX = event.pageX;
        startY= event.pageY;

        $(this).bind('mousemove', function(e){
            drawLine(startX, startY, e.pageX, e.pageY);
        });
    }).mouseup(function(){
        $(this).unbind('mousemove');
    });

    function drawLine(x, y, stopX, stopY){
        ctx.clearRect (0, 0, can.width, can.height);
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(stopX, stopY);
        ctx.closePath();
        ctx.stroke();

        // calculate length   
        var pixelLength = Math.sqrt(Math.pow((stopX - x),2) + Math.pow((stopY-y),2));
        var physicalLength = pixelLength / imageDpi;

        ctx.fillStyle = "#FFFFFF";

        var xPos = Math.min(stopX, 930);
        var yPos = Math.min(stopY, 700);


        ctx.fillText((Math.round(physicalLength) + " km"), xPos, yPos+25);
        ctx.fillText((Math.round(physicalLength/1.609) + " miles"), xPos, yPos+40);
    }
});